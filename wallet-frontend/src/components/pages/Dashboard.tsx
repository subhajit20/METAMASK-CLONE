import React from 'react'
import AccountAddressCopy from '../ui/account/AccountAddressCopy';
import AccountDetails from '../ui/account/AccountDetails';

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div className='bg-white w-full'>
        <AccountDetails />
    </div>
  )
}

export default Dashboard