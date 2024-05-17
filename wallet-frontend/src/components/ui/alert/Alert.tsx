import React from 'react'

type Props = {
    okay:boolean | null
}

const Alert = (props: Props) => {
  return (
    <React.Fragment>
        <div className='flex w-full justify-center pt-5'>
            <div className={`alert w-4/6 ${props.okay ? 'alert-success' : 'alert-error'}`}>
                <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM24 26C22.9 26 22 25.1 22 24V16C22 14.9 22.9 14 24 14C25.1 14 26 14.9 26 16V24C26 25.1 25.1 26 24 26ZM26 34H22V30H26V34Z" fill="#E92C2C" />
                </svg>
                <div className="flex flex-col text-white">
                    <span>Title</span>
                    <span className="text-content2">Long sample text</span>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Alert