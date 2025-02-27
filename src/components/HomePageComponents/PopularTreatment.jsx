import { Link } from 'react-router-dom'
import TreatmentCard from './TreatmentCard'

const popularTreatmentData = [
    {
        id: 1,
        title: "Medicine and Nephrology",
        imgUrl: "https://i.ibb.co.com/C2ksPGf/nephrology.png"
    },
    {
        id: 2,
        title: "Medicine and Nephrology",
        imgUrl: "https://i.ibb.co.com/v1HkD03/cardiology.png"
    },
    {
        id: 3,
        title: "Medicine and Nephrology",
        imgUrl: "https://i.ibb.co.com/pRbW7Jf/food.png"
    },
    {
        id: 4,
        title: "Medicine and Nephrology",
        imgUrl: "https://i.ibb.co.com/hmTQYsY/spine.png"
    },
]

function PopularTreatment() {
    return (
        <section className='my-14 sm:my-20'>
            <div className='container'>
                {/* section-title  */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-5 sm:mb-10">
                    <h2 data-aos="zoom-up"
                        data-aos-duration="1000" className="text-2xl 2xl:text--xl font-bold text-primary mb-1 leading-normal">Most Popular Treatment </h2>
                    <Link data-aos="zoom-up"
                        data-aos-duration="2000" to={'/'} className="text-xl 2xl:text-[24px] font-semibold text-[#01548B]">See All</Link>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {
                        popularTreatmentData.map((item) => (
                            <div data-aos="zoom-in"
                                data-aos-duration="2000" key={item.id} className=''>
                                <TreatmentCard item={item} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default PopularTreatment