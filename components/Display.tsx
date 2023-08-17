import Link from 'next/link';
import { Suspense } from 'react';
import { CallbackButton } from './CallbackButton';
import Table from './Table';

export type ContextType = {
  data: {
    data: {
      customers: { email_address: string, first_name: string, last_name: string }[]
    }
  }
}

export const Display = ({ initData }: { initData?: any }) => {


  return (
    <>
      {
        true &&
        <>
          <CallbackButton callback={() => console.log('add')} text="Add"></CallbackButton>
          <CallbackButton callback={() => console.log('remove')} text="remove"></CallbackButton>
          <Suspense>
            <Table data={initData} />

          </Suspense>
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