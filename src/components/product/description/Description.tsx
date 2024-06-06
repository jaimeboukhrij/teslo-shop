interface Props{
  description:string
}

export const Description = ({ description }:Props) => {
  return (
    <div className='flex flex-col gap-2'>
      <h6 className='font-semibold text-lg'>Description</h6>
      <p>
        {description}
      </p>
    </div>
  )
}
