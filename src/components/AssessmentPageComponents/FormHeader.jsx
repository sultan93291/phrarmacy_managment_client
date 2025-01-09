

function FormHeader() {
  return (
    <div data-aos="zoom-up"
    data-aos-duration="1000" className="flex flex-col gap-4 pb-14 border-b border-[#78D0FF] pt-24">
        <h3 data-aos="zoom-up"
    data-aos-duration="1000" className="text-5xl font-semibold text-titleText">Your Health Questions</h3>
        <p data-aos="zoom-up"
    data-aos-duration="2000" className="text-headerSearchbarPlaceHolder text-xl ">The information you provide is kept strictly confidential and will be reviewed by a clinician. The listed questions are designed to provide the prescriber with sufficient information to make an informed decision regarding the treatment’s suitability.</p>
    </div>
  )
}

export default FormHeader