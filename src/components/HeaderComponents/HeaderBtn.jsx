import React from 'react'
import userIcon from "../../assets/images/icon/User-rounded.svg"

function HeaderBtn({text}) {
  return (
    <div className='py-[7px] px-3 btn-gradient rounded-[50px] flex items-center gap-[18px]'>
        <p className='text-[18px] font-semibold text-white'>{text}</p>
        <div className='h-9 w-9 bg-white rounded-full flex items-center justify-center'>
            <img src={userIcon} alt="userIcon" />
        </div>
    </div>
  )
}

export default HeaderBtn