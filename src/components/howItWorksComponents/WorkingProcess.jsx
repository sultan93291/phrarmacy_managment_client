import ProcessCard from "./ProcessCard";
import ProcessLine from "../../assets/images/process-line.png";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const workingProcess = [
  {
    id: 1,
    imgUrl: "https://i.ibb.co.com/TMjjNHs/work-step1.png",
    title: "Answer quick question",
    description: "No GP or pharmacy visits, just a quick online consultation",
  },
  {
    id: 2,
    imgUrl: "https://i.ibb.co.com/DPdvwBF/work-step2.png",
    title: "Answer quick question",
    description: "No GP or pharmacy visits, just a quick online consultation",
  },
  {
    id: 3,
    imgUrl: "https://i.ibb.co.com/cLBNyJJ/work-step3.png",
    title: "Answer quick question",
    description: "No GP or pharmacy visits, just a quick online consultation",
  },
];

function WorkingProcess() {
  const SiteURl = import.meta.env.VITE_SITE_URL;
  const [WorkingCardData, setWorkingCardData] = useState([])
  useEffect(() => {
    axios({
      method: "post",
      url: `${SiteURl}/api/section/data?type=process`,
    })
      .then(res => {
        console.log(res.data.data.cards);
        setWorkingCardData(res.data.data.cards);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);



  return (
    <section className="py-[100px]">
      <div className="container">
        {/* section title  */}
        <div className="mb-20 md:mb-[120px] text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0ca6fc] md:text--xl">Our Working Process</h3>
        </div>
        <div className="grid sm:grid-cols-20 md:grid-cols-3 gap-10 sm:gap-16 lg:gap-[180px] mt-5 relative">
          {WorkingCardData.map(item => (
            <ProcessCard key={item.id} item={item} />
          ))}
          <img
            className="absolute hidden md:block top-0 left-[266px] w-[397px]"
            src={ProcessLine}
            alt="ProcessLine"
          />
          <img
            className="absolute hidden md:block top-0 right-[266px] w-[397px]"
            src={ProcessLine}
            alt="ProcessLine"
          />
        </div>
      </div>
    </section>
  );
}

export default WorkingProcess;
