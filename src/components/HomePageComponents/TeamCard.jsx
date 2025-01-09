import React from 'react'

function TeamCard({item}) {
  return (
    <div data-aos="zoom-in"
    data-aos-duration="2000"  className='team-card relative py-[14px] px-[30px] bg-teamCardColor rounded-[10px] overflow-hidden max-h-[400px]'>
        <img className='w-full h-full' src={item.imgUrl} alt={item.name} />
        <div className='py-3 px-7 rounded-[10px] bg-primary absolute bottom-[14px] left-7 right-7 text-white'>
            <h4 className='text-[24px] font-semibold capitalize'>{item.name}</h4>
            <p className='text-[12px] font-semibold uppercase mt-1'>{item.designation}</p>
        </div>
    </div>
  )
}

export default TeamCard