import { createContext, useReducer, useCallback, useEffect } from "react";
import axios from 'axios'

type DataProviderProps<T> = {
  requestMetas: { url: string, options: any };
  children: JSX.Element;
  initialData?: T;
}

export type DataState<T> = {
  data: T | null
  isLoading: boolean,
  error: Error | null,
  stale: boolean
}

export type DataActions<T> =
  | { type: 'fetchStarted' }
  | { type: 'fetchSuccess'; data: T; }
  | { type: 'fetchError'; error: Error; }
  | { type: 'isStale'; };

// need to pass this T value
type DataContextValue<T> = {
  data: DataState<T>['data'],
  isLoading: DataState<T>['isLoading'],
  error: DataState<T>['error'],
  setStale: () => void,
}

const dataReducer = <T,>(state: DataState<T>, action: DataActions<T>): DataState<T> => {
  switch (action.type) {
    case 'fetchStarted':
      return { ...state, isLoading: true, error: null }
    case 'fetchSuccess':
      return { ...state, isLoading: false, error: null, data: action.data, stale: false };
    case 'fetchError':
      return { ...state, isLoading: false, error: action.error }
    case 'isStale':
      console.log('stale')
      return { ...state, stale: true }
    default:
      throw new Error(`Unhandled action type: ${action}`)
  }
}

export const DataContext = createContext<DataContextValue<any>>({
  data: null,
  isLoading: false,
  error: null,
  setStale: function (): void {
    throw new Error("Function not implemented.");
  }
})

export const DataProvider = <T,>({ requestMetas, children, initialData }: DataProviderProps<T>) => {
  const [state, dispatch] = useReducer(dataReducer, {
    data: null,
    isLoading: false,
    error: null,
    stale: true,
  });

  const handleStale = () => {
    dispatch({type:'isStale'})
  }

  const fetchData = useCallback(async (signal: AbortSignal) => {
    dispatch({ type: "fetchStarted" });
    try {
      const result = await axios(requestMetas.url, { ...requestMetas.options, signal }).then(res => {
        return res.data
      });
      dispatch({ type: "fetchSuccess", data: result });
    } catch (e) {
      console.log('error')
      dispatch({ type: "fetchError", error: e as Error })
    }

  }, [requestMetas])

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    if (state.stale === true) {
      fetchData(signal);
    }
    return () => {
      abortController.abort();
    }
  }, [fetchData, state.stale])


  return (
    <DataContext.Provider value={{ ...state, setStale: handleStale } }>{children}</DataContext.Provider>
  )
}