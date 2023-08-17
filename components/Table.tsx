import { SubGetCustomersLikeNameSubscription } from '../generated/graphql';

const Headers = ["email_address", "first_name", "last_name"] as const;
type HeadersTuple = typeof Headers;
type Header = HeadersTuple[number]

export const Table = ({ data }: { data?: SubGetCustomersLikeNameSubscription | undefined }) => {
  console.log(data)
  const headers: Header[] = data?.customers[0] ? Object.keys(data.customers[0]) as Header[] : [];
  return (
    <div className='tableContainer' style={{ color: 'black' }}>
      {
        <table className='table'>
          <thead>
            <tr className='tr'>
              {headers.map((header, i) => (<th key={i}>{header}</th>))}
            </tr>
          </thead>
          <tbody>
            {data &&
              (data?.customers || []).map((row, index: number) => (
                <tr key={index}>
                  {headers.map((header, ind) => (
                    <td key={ind} className="td">
                      {row[header]}
                    </td>
                  ))}
                </tr>
              ))
            }
          </tbody>
        </table>
      }
    </div>
  )
}

export default Table;