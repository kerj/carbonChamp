import { useEffect, useState } from 'react'
import { useStreamCustomersByFnSubscription } from '../generated/graphql';
import StreamTable from './StreamTable';

export type Rows = {
  __typename?: "customers";
  email_address?: string | null;
  first_name?: string | null;
  last_name?: string | null;
}[]

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { data } = useStreamCustomersByFnSubscription({
    variables: { fn_ilike: searchTerm },
  })
  const [poolData, setPoolData] = useState<Rows>([]);
  const handleChange = (e: any) => {
    console.log(e.target.value === '', searchTerm)
    setPoolData([])
    if (e.target.value === '') {
      return setSearchTerm('')
    }
    setSearchTerm(`${e.target.value}%`);
  }

  useEffect(() => {
    if (searchTerm === '') {
      return
    }
    setPoolData(p => [...p, ...(data ? data?.customers_stream : [])])
  }, [data, searchTerm])

  return (
    <>
      <input
        placeholder='search by first name'
        onChange={handleChange}
      />
      {data &&
        <StreamTable data={poolData} />
      }
    </>
  )
}
