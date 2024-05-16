'use client'
import React,{ useState } from 'react'
import Image from 'next/image';
import MetaMask from '../../../public/assets/MetaMask_Fox.png';
import { ethers } from 'ethers';

type Props = {}

const SignUp = (props: Props) => {
const [wallet,setWallet] = useState<ethers.HDNodeWallet | null>(null);
  const [password,setPassword] = useState<string | null>(null)
  
  const CreateWallet = (e:any) =>{
    if(e.code === 'Enter'){
        if(wallet === null || password === null){
          setWallet(ethers.Wallet.createRandom());
          console.log(wallet);
          window.alert(wallet?.address);
        }
    }
  }
  return (
    <div className="form-field w-2/6 relative -top-24">
        <div className='w-full flex justify-center'>
            <Image height={200} width={200} alt='' src={MetaMask} />
        </div>
		<input onKeyDown={(e) => CreateWallet(e)} type="password" className="input text-black placeholder:text-black input-lg max-w-full bg-white" placeholder="Enter password" />
	</div>
  )
}

export default SignUp