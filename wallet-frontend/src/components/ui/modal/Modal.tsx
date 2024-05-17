import React from 'react'

type Props = {
    mnemonic:string | undefined
}

const Modal = (props: Props) => {
  return (
    <div>
        <input className="modal-state" id="modal-3" type="checkbox" />
        <div className="modal">
            <label className="modal-overlay"></label>
            <div className="modal-content flex flex-col gap-5">
                <label htmlFor="modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                <h2 className="text-xl">Do you want to download the mnemonic phrase ?</h2>
                {
                    props.mnemonic !== undefined && <span className='bg-gray-700 p-2'>{props.mnemonic}</span>
                }
                <div className="flex gap-3">
                    <button className="btn btn-error btn-block">Download</button>
                    <button className="btn btn-block">No Go ahead</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal