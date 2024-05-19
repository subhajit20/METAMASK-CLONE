'use client'
import React from 'react';
import Button from '../ui/buttons/Button';
import MetaMaskLogo from '../ui/metamasklogo/MetaMaskLogo';
import { useRouter } from 'next/navigation';

type Props = {}

const HomePage = (props: Props) => {
    const router = useRouter();

    const goNextPage = (routename: string) =>{
        router.push(`/${routename}`);
    }
  return (
    <div className='flex flex-col items-center justify-center gap-y-5 w-full'>
        <MetaMaskLogo />
        <Button func={()=> goNextPage('importwallet')} btnName={'Import Existing Wallet'} />
        <Button func={()=> goNextPage('createnewwallet')} btnName={'Create New Wallet'} />
    </div>
  )
}

export default HomePage