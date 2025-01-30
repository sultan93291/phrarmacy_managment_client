import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import axios from "axios";
import { useEffect, useState } from "react";
const SiteURl = import.meta.env.VITE_SITE_URL;


function MedicineDetailsAccordion() {
  const [faqData, setfaqData] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${SiteURl}/api/faq/supplement`,
    })
      .then(res => {
        setfaqData(res?.data?.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log(faqData, " this is a faq data ");
  return (
    <div data-aos="zoom-up" data-aos-duration="2000" className="py-14 sm:py-24">
      <Accordion className="space-y-2" type="single" collapsible>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem
              data-aos="zoom-in"
              data-aos-duration="2000"
              key={item.id}
              value={`item-${index}`}
              className="border border-[#084772] rounded-[10px] overflow-hidden mt-[14px] accordion-item"
            >
              <AccordionTrigger className="text-lg sm:text-xl lg:text-2xl xl:text-[32px] text-menuLinkColor font-semibold py-3 md:py-5 px-3 sm:px-[30px] md:px-[50px] bg-headerBg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pt-5 pb-8 px-4 sm:px-[55px] bg-white text-[18px] lg:text-[20px] xl:text-[24px] leading-[40px]">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Accordion>
    </div>

  );
}

export default MedicineDetailsAccordion;
