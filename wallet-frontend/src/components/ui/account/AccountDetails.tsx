'use client'
import React,{useEffect, useState} from 'react';
import API_KEY from '../api';
import { HDNodeWallet, ethers, EtherscanProvider,JsonRpcProvider
 } from 'ethers';
import Copy from '../icons/Copy';
import AccountAddressCopy from './AccountAddressCopy';
import AccountBalance from './AccountBalance';
import SendEther from './SendEther';
import SendEthModal from '../modal/SendEthModal';
import TransactionList from './TransactionList';

type Props = {
    address?: string
}

const AccountDetails = (props: Props) => {
    const [address,setAddress] = useState<string | null>();
    const [fullAddess, setFullAddress] = useState<string | null>();
    const [balance,setBalance] = useState<string | null>();
    const [etherScanPr,setEtherScanPr] = useState<EtherscanProvider>();

    useEffect(()=>{
        async function getingo() {
            let acc = localStorage.getItem('acc');
            if(acc){
                const account: HDNodeWallet = JSON.parse(acc);
                setFullAddress(account.address)
                setAddress(`${account.address.slice(0,5)}...${account.address.slice(-4)}`);
                try{
                    const provider = new EtherscanProvider(
                            'sepolia',
                            API_KEY
                        );
                        setEtherScanPr(provider);
                        // const provider = new JsonRpcProvider(
                        //     window.ethereum
                        // );
                    const accBalance: bigint = await provider.getBalance(account.address);
                    console.log(accBalance)
                    setBalance(ethers.formatEther(accBalance));
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

    // useEffect(()=>{
    //     async function getBalanceInUsd() {
    //         try{
    //             const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",{
    //                 headers:{
    //                     'mode':'no-cors'
    //                 }
    //             });
    //             const data = await res.json();

    //             console.log(data);
    //         }catch(e){
    //             console.log(e)
    //         }
    //     }
    //     getBalanceInUsd()
    // },[balance])
  return (
        <div className='flex flex-col items-center justify-center gap-y-5'>
            <SendEthModal
                from={fullAddess!}
                to=''
                value='0.1'
            />
            <AccountAddressCopy address={fullAddess!} />
            <AccountBalance balance={balance!} />
            <SendEther />
            <TransactionList
                provider={etherScanPr!}
                address={fullAddess!}
            />
        </div>
  )
}

export default AccountDetails