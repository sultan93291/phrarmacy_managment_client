

function TreatmentCard({item}) {
  return (
    <div  data-aos="zoom-up"
    data-aos-duration="2000" className="min-h-[282px] rounded-[20px] bg-headerBg text-center py-10 px-[30px] flex flex-col">
        <img  className="max-h-[130px] max-w-[130px] mx-auto flex grow" src={item.imgUrl} alt={item.title} />
        <div className="mt-9">
            <h3 className="text-[24px] font-semibold text-primary">{item.title}</h3>
        </div>
    </div>
  )
}

export default TreatmentCard