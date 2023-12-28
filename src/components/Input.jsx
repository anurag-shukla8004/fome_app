import React from 'react'

function Input({labelName, type = 'text', value, setValue, placeholder = ''}) {
  return (
    <div className='flex flex-col justify-start my-4'>
        <label className='text-base font-medium text-[#718096]'>{labelName}</label>
        <input className='h-10 p-2 font-medium text-[#4A5568] border border-solid border-[#CBD5E0] rounded-xl' type={type} value={value} onChange={(e)=>{setValue(e.target.value)}} placeholder={placeholder} />
    </div>
  )
}

export default Input