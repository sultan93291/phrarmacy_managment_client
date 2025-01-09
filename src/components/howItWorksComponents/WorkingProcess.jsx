import ProcessCard from "./ProcessCard";
import ProcessLine from "../../assets/images/process-line.png"

const workingProcess = [
    {
        id:1,
        imgUrl:"https://i.ibb.co.com/TMjjNHs/work-step1.png",
        title:"Answer quick question",
        description:"No GP or pharmacy visits, just a quick online consultation"
    },
    {
        id:2,
        imgUrl:"https://i.ibb.co.com/DPdvwBF/work-step2.png",
        title:"Answer quick question",
        description:"No GP or pharmacy visits, just a quick online consultation"
    },
    {
        id:3,
        imgUrl:"https://i.ibb.co.com/cLBNyJJ/work-step3.png",
        title:"Answer quick question",
        description:"No GP or pharmacy visits, just a quick online consultation"
    }
]

function WorkingProcess() {
  return (
    <section className="py-[100px]">
        <div className="container">
            {/* section title  */}
            <div className="mb-[120px] text-center">
                <h3 className="text--xl text-primryDark">Our Working Process</h3>
            </div>
            <div className="grid grid-cols-3 gap-[180px] mt-5 relative">
                {
                    workingProcess.map((item) => (
                        <ProcessCard key={item.id} item={item} />
                    ))
                }
                <img className="absolute top-0 left-[266px] w-[397px]" src={ProcessLine} alt="ProcessLine" />
                <img className="absolute top-0 right-[266px] w-[397px]" src={ProcessLine} alt="ProcessLine" />
            </div>
        </div>
    </section>
  )
}

export default WorkingProcess;
