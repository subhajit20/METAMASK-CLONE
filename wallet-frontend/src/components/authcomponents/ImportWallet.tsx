'use client'
import React, { useEffect, useState } from 'react';
import Alert from '../ui/alert/Alert';
import { ethers } from 'ethers';

type Props = {}

interface mnemonic_pharase_inputs {
        input1:string,
        input2:string,
        input3:string,
        input4:string,
        input5:string,
        input6:string,
        input7:string,
        input8:string,
        input9:string,
        input10:string,
        input11:string,
        input12:string,
}

const ImportWallet = (props: Props) => {
    const [phrases,setPrases] = useState<mnemonic_pharase_inputs>({
        input1:'',
        input2:'',
        input3:'',
        input4:'',
        input5:'',
        input6:'',
        input7:'',
        input8:'',
        input9:'',
        input10:'',
        input11:'',
        input12:'',
    })
    const [istruePhrase,setIsTruePhrase] = useState<boolean | null>(null)

    const onChangeInputs = (e: any ,input: string) =>{
        setPrases((prev: any)=> {
            return { ...prev, [input]:e.target.value }
        })
    }

    const importWallet = () =>{
        let mnemonic = ''
        for(let index in Object.entries(phrases)){
            // console.log(Object.entries(phrases)[parseInt(index)])
            if(Object.entries(phrases)[parseInt(index)][1] === ""){
                return 0;
            }else{

                if(Object.entries(phrases).length - 1 === parseInt(index) ){
                    mnemonic += Object.entries(phrases)[parseInt(index)][1];
                }else{
                    mnemonic += Object.entries(phrases)[parseInt(index)][1] + ' ';
                }
            }
        }

        try{
            console.log(mnemonic);
            ethers.Wallet.fromPhrase(mnemonic)
            setIsTruePhrase(true)
        }catch(e){
            console.log(e);
            setIsTruePhrase(false);
        }
        // console.log(ethers.Wallet.createRandom().mnemonic?.phrase)

    }

    useEffect(()=>{
        console.log(phrases)
    },[phrases])
  return (
    <div className=''>
        {
            istruePhrase === false ? <Alert okay={istruePhrase} /> : ''
        }
        <div className='text-2xl md:text-4xl text-center font-extrabold text-black'>
            <h1>Access your wallet with your</h1>
            <h3>secret recovery phrase</h3>
        </div>
        <div className="form-group relative top-10">
            <div className="form-control relative w-full grid grid-cols-3 gap-10 px-5">
                {
                    Object.entries(phrases).map((inputs,index)=>{
                        return <span className='flex gap-x-2 justify-center items-center'>
                                    {index+1} <input onChange={(e)=> onChangeInputs(e,inputs[0])} name={inputs[0]} type="password" className="input input-lg max-w-52 bg-white text-black" placeholder="Enter password" />
                                </span>
                    })
                }
            </div>
            <label className="btn btn-primary self-center rounded-full" htmlFor="modal-3" onClick={importWallet}>Confirm secret recovery phrase</label>
        </div>
    </div>
  )
}

export default ImportWallet