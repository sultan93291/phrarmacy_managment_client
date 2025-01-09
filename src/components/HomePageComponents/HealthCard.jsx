import React from 'react'

function HealthCard({item}) {
  return (
    <div data-aos="zoom-in"
    data-aos-duration="2000" className='py-9 px-[44px] bg-healthcareCardBg text-white rounded-[20px] text-center'>
        <img className='w-[94px] h-[94px] mx-auto' src={item.imgUrl} alt={item.title} />
        <div>
            <h4 className='text-[24px] font-bold mt-5'>{item.title}</h4>
            <p className='text-[18px] font-medium leading-[27px] mt-2'>{item.description}</p>
        </div>
    </div>
  )
}

export default HealthCard