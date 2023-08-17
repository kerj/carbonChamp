import Link from 'next/link';
import { CallbackButton } from './CallbackButton';
import { useContext } from 'react';
import { DataContext } from '../Context/DataContext';

export type ContextType = {
  data: {
    message: string
  }
}

export const Display = () => {
  const { data }: ContextType = useContext(DataContext)
  console.log(data)
  return (
    <>
      {

        <>
          <CallbackButton callback={() => console.log('add')} text="Add"></CallbackButton>
          <CallbackButton callback={() => console.log('remove')} text="remove"></CallbackButton>
          <img src={data?.message} alt="YOLO" />
          <Link
            href="/quoteDisplay/quotes"
          >
            To quote page
          </Link>
        </>
      }
    </>
  )
}

export default Display;