import React from 'react'

export function FomeButton({title}) {
  return (
    <div className='w-full'>
        <button className='w-full h-10 bg-[#1C4532] font-lg text-white font-semibold my-8 rounded-xl' type='submit'>{title}</button>
    </div>
  )
}
