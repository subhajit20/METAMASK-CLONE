'use client'
import React,{ useEffect, useState } from 'react'
import Image from 'next/image';
import MetaMask from '../../../public/assets/MetaMask_Fox.png';
import { useRouter } from 'next/navigation'
import { useAppSelector } from '@/store/hook';
import { useAppDispatch } from '@/store/hook';
import { selectUser,createAccount } from '@/features/userSlice';
import Alert from '../ui/alert/Alert';
import Modal from '../ui/modal/Modal';
import { Wallet, ethers } from 'ethers';

type Props = {}

const SignUp = (props: Props) => {
  const [password,setPassword] = useState<string>('');
  const [cofirmPassword,setCofirmPassword] = useState<string | null>(null);
  const [isFormField,setIsFormField] = useState<boolean | null>(null);
  const { wallet } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const router = useRouter();
  
  const CreateWallet = (e:any) =>{
    try{
        if(password !== '' && cofirmPassword === password){
            const _wallet = ethers.Wallet.createRandom()
            console.log(_wallet);
            // window.alert(_wallet?.address);
            // const data = new Wallet(_wallet.privateKey);
            dispatch(
              createAccount({
                wallet:_wallet
              })
            )
            setIsFormField(true);
            
        }else{
            setIsFormField(false);
            new Error("Please filled the form correctly!")
        }
    }catch(e){
      setIsFormField(false);
    }finally{
      if(isFormField == false){

        setTimeout(()=>{
          setIsFormField(null);
        },2000)
      }
    }
  }
  const goToPhrasePage = () =>{
    router.push('/importwallet');
  }
  return (
    <div className="form-field w-2/6 relative -top-20 flex-col gap-y-5">
      {
        isFormField == true ? <Modal mnemonic={wallet?.mnemonic?.phrase} go={goToPhrasePage}  /> : ''
      }
      {
        isFormField === false ? <Alert okay={isFormField} /> : ''
      }
        <div className='w-full flex justify-center'>
            <Image height={200} width={200} alt='' src={MetaMask} />
        </div>
        <div className="form-field">
          <label className="form-label">
            <span className="form-label-alt text-base">New password (8 characters min)</span>
          </label>
		        <input type="password" onChange={(e)=> setPassword(e.target.value)}  className="input text-black placeholder:text-black input-lg max-w-full bg-white" placeholder="Enter password" />
        </div>
        <div className="form-field">
          <label className="form-label">
            <span className="form-label-alt text-base">Confirm password</span>
          </label>
		        <input type="password" onChange={(e)=> setCofirmPassword(e.target.value)} className="input text-black placeholder:text-black input-lg max-w-full bg-white" placeholder="Enter password" />
        </div>
        <label className="btn btn-primary" htmlFor="modal-3" onClick={CreateWallet}>Register</label>
	</div>
  )
}

export default SignUp