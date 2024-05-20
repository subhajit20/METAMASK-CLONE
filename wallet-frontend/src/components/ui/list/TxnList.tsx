import React from 'react';
import Send from '../icons/Send';

type Props = {}

const TxnList = (props: Props) => {
  return (
    <div className='flex py-3 px-2 rounded-full justify-between items-center w-[50rem] bg-slate-200 '>
        <div className='justify-self-start'>
            <Send />
        </div>
        <div className='flex flex-col bg-full justify-self-start'>
            <span>Send</span>
            <span>Date</span>
        </div>
        <div className='justify-self-end text-black self-start'>
            1.0ETH
        </div>
    </div>
  )
}

export default TxnList