import AssessmentResult from "@/components/Dashboard/User/AssessmentResult";
import DashboardTitle from "@/components/Dashboard/User/DashboardTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useGetAssesMentResultIntentQuery } from "@/Redux/features/api/apiSlice";
import { useEffect, useState } from "react";

const UserAssessmentResult = () => {
  const [AllAssesmentData, setAllAssesmentData] = useState([]);

  const { data, isLoading, isError, error } =
    useGetAssesMentResultIntentQuery();

  useEffect(() => {
    console.log(data?.data, "pure data from");
    setAllAssesmentData(data?.data);
  }, [data]);

  console.log(AllAssesmentData, "asses ment data");

  return (
    <section>
      {/* title */}
      <DashboardTitle title="Assessment Result History" />

      {/* All Results */}
      <div className="mt-10">
        {AllAssesmentData?.map(data => {
          return (
            <Accordion
              key={data?.Order_uuid}
              type="single"
              collapsible
              className="w-full"
            >
              {/* item */}
              <AccordionItem
                data-aos="zoom-in"
                data-aos-duration="1000"
                value={`item-${data?.Order_uuid}`}
                className="border border-[#084772] rounded-lg sm:rounded-[10px] overflow-hidden mt-[14px] accordion-item"
              >
                {/* title */}

                <AccordionTrigger className="sm:text-lg xl:text-2xl text-[#052D4C] font-semibold py-4 xl:py-5 px-5 xl:px-10">
                  <div className="flex items-start text-left gap-3 sm:gap-5 xl:gap-12">
                    <p className="text-lg">#{data?.Order_uuid}</p>
                    <h5 className="xl:text-xl">{data?.Treatment}</h5>
                  </div>
                </AccordionTrigger>

                {/* details */}

                <AccordionContent className="pt-3 sm:pt-5 pb-8 px-4 sm:px-7 lg:px-[55px] bg-white">
                  <AssessmentResult questions={data} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
    </section>
  );
};

export default UserAssessmentResult;
