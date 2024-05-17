'use client'
import React,{useState} from 'react'
import Steps from '@/components/ui/steps/Steps';
import MatchingPhrase, {componentName} from '@/components/authcomponents/importwallet/MatchingPhrase';
import SeedPhrase from '@/components/authcomponents/importwallet/SeedPhrase';

type Props = {}

const page = (props: Props) => {
  const [currntComponent,setCurrentComponent] = useState(0)
    const components = [
        <SeedPhrase steps={currntComponent} nextComponent={setCurrentComponent} />,
        <MatchingPhrase name={componentName.SIGNUPMATCHINGPHRASE} steps={currntComponent} prevComponent={setCurrentComponent} />
    ]
  return (
    <div className='bg-white min-h-[42rem]'>
        <Steps />
        {components[currntComponent]}
    </div>
  )
}

export default page