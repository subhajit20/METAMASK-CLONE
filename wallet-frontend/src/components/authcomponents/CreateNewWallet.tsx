'use client'
import React,{ useEffect, useState } from 'react'
import Image from 'next/image';
import MetaMask from '../../../public/assets/MetaMask_Fox.png';
import { useRouter } from 'next/navigation'
import { useAppSelector } from '@/store/hook';
import { useAppDispatch } from '@/store/hook';
import { selectUser,createAccount } from '@/features/userSlice';
import Modal from '../ui/modal/Modal';
import { Wallet, ethers } from 'ethers';

type Props = {}

const SignUp = (props: Props) => {
  const [password,setPassword] = useState<string | null>(null);
  const [cofirmPassword,setCofirmPassword] = useState<string | null>(null);
  const { wallet } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const router = useRouter();
  
  const CreateWallet = (e:any) =>{
    if(e.code === 'Enter'){
      // if(password?.length >= 1 && cofirmPassword === password){
        // }else{
      //   alert("Password is not correct");
      // }
        // if(wallet === null || password === null){
          const _wallet = ethers.Wallet.createRandom()
          // setWallet(_wallet);
          // console.log(_wallet);
          // window.alert(_wallet?.address);
          // const data = new Wallet(_wallet.privateKey);
          dispatch(
            createAccount({
              wallet:_wallet
            })
          )
        // }
    }
  }
  return (
    <div className="form-field w-2/6 relative -top-20 flex-col gap-y-5">
        <Modal mnemonic={wallet?.mnemonic?.phrase} />
        <div className='w-full flex justify-center'>
            <Image height={200} width={200} alt='' src={MetaMask} />
        </div>
        <div className="form-field">
          <label className="form-label">
            <span className="form-label-alt text-base">New password (8 characters min)</span>
          </label>
		        <input onKeyDown={(e) => CreateWallet(e)} type="password" className="input text-black placeholder:text-black input-lg max-w-full bg-white" placeholder="Enter password" />
        </div>
        <div className="form-field">
          <label className="form-label">
            <span className="form-label-alt text-base">Confirm password</span>
          </label>
		        <input onKeyDown={(e) => CreateWallet(e)} type="password" className="input text-black placeholder:text-black input-lg max-w-full bg-white" placeholder="Enter password" />
        </div>
        <label className="btn btn-primary" htmlFor="modal-3" onClick={CreateWallet}>Register</label>
	</div>
  )
}

export default SignUp