import React from "react"

export const useGetData = (url: string) => {
  const [data, setData] = React.useState(null)
  React.useEffect(() => {
    let cleaningup = false
    fetch(url).then(res => res.json()).then(result => {
      if (!cleaningup) {
        setData(result)
      }
    })

    return () => {
      cleaningup = true
    }
  }, [url])

  return data;
}