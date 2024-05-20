import Copy from "../icons/Copy"

type Props = {
    address?: string
}

const AccountAddressCopy = (props: Props) => {
    
  return (
    <div>
        <span className="flex justify-center items-center gap-x-3 badge badge-flat-primary text-sm px-5 py-2  bg-blue-800 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30">
            <span className='text-blue-600'>{props.address!}</span> 
            <Copy />
        </span>
        
    </div>
  )
}

export default AccountAddressCopy