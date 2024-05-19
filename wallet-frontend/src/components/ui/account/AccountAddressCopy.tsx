'use client'
import React,{useEffect, useState} from 'react';
import API_KEY from '../api';
import { HDNodeWallet, ethers, EtherscanProvider
 } from 'ethers';
import Copy from '../icons/Copy';

type Props = {
    address?: string
}

const AccountAddressCopy = (props: Props) => {
    const [address,setAddress] = useState<string | null>();

    useEffect(()=>{
        async function getingo() {
            let acc = localStorage.getItem('acc');
            if(acc){
                const account: HDNodeWallet = JSON.parse(acc);
                setAddress(`${account.address.slice(0,5)}...${account.address.slice(-4)}`);
                try{
                        // const pr = new EtherscanProvider(
                        //     'sepolia',
                        //     API_KEY
                        // );
                        // const data = await pr.fetch(
                        //     'account',
                        //     {
                        //         action: "txlist",
                        //         address: account.address,
                        //         startblock: 0,
                        //         endblock:99999999
                        //     },
                        //     false
                        // )
                        // console.log(data)
                }catch(e){
                    console.log(e)
                }
            }
        }

        getingo()
    },[])
  return (
    <div>
        <span className="flex justify-center items-center gap-x-3 badge badge-flat-primary text-sm px-5 py-2  bg-blue-700 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30">
            <span className='text-blue-600'>{address!}</span> 
            <Copy />
        </span>
    </div>
  )
}

export default AccountAddressCopy