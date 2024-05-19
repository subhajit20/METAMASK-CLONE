import React from 'react';
import CreateNewWallet from '@/components/authcomponents/CreateNewWallet';

type Props = {}

const page = (props: Props) => {
  return (
    <section className="bg-white min-h-[40rem] flex justify-center items-center">
      <CreateNewWallet />
    </section>
  )
}

export default page