import React from 'react'

type Props = {
    from: string,
    to: string,
    value: string
}

const SendEthModal = (props: Props) => {
  return (
    <div>
        <input className="modal-state" id="modal-3" type="checkbox" />
        <div className="modal">
            <label className="modal-overlay"></label>
            <div className="modal-content flex flex-col gap-5 w-full">
                <label htmlFor="modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                <div className="form-field w-full">
                    <label className="form-label text-xl">From</label>
                    <input placeholder="Type here" value={props.from} type="email" className="input max-w-full text-lg" />
                </div>

                <div className="form-field w-full">
                    <label className="form-label text-xl">To</label>

                    <input placeholder="Type here" value={props.to} type="email" className="input max-w-full text-lg" />
                </div>

                <div className="form-field w-full">
                    <label className="form-label text-xl">Value</label>
                    <input placeholder="Type here" value={props.value} type="email" className="input max-w-full text-lg" />
                </div>
            
                <div className="flex gap-3">
                    <button className="btn btn-block" >SEND</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SendEthModal