
import HealthCard from './HealthCard'

function HealthcareSection() {
    const healthcareData = [
        {
            id: 1,
            imgUrl: "https://i.ibb.co.com/2NHbpyZ/Benefit-Card-Icon-Container-1.png",
            title: "Online Consultation",
            description: "Complete a quick health assessment online in just 2 minutes to provide us with the necessary information about your condition."
        },
        {
            id: 2,
            imgUrl: "https://i.ibb.co.com/2NF1wD4/Benefit-Card-Icon-Container-2.png",
            title: "Genuine Prescription",
            description: "Our licensed UK medical team will review your information and, if eligible, issue a prescription tailored to your needs."
        },
        {
            id: 3,
            imgUrl: "https://i.ibb.co.com/yQ4MJ2N/Benefit-Card-Icon-Container-3.png",
            title: "Discreet Delivery",
            description: "We prioritize your privacy with discreet packaging, ensuring your treatment arrives securely within 24 hours."
        },
    ]
    return (
        <section className='px-4 xl:px-[47px] mt-10'>
            <div className='py-10 sm:py-20 md:py-[140px] bg-primryDark rounded-2xl sm:rounded-[40px]'>
                <div className='container'>
                    {/* section title  */}
                    <div data-aos="zoom-up"
                        data-aos-duration="1000" className='text-center'>
                        <h3 className='text-2xl sm:text-3xl md:text-4xl opacity-1 font-bold text--xl text-white md:w-[60%] mx-auto'>Quick, Confidential, and Reliable Healthcare</h3>
                    </div>
                    <div className='mt-10 sm:mt-0 grid grid-cols-1 lg:grid-cols-3 gap-5  md:gap-[16px]'>
                        {
                            healthcareData.map((item) => (
                                <div data-aos="zoom-in"
                                    data-aos-duration="2000" key={item.id} className='sm:mt-10'>
                                    <HealthCard item={item} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HealthcareSection