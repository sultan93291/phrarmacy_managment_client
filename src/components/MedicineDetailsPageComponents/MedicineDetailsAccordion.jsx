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
    <div data-aos="zoom-up" data-aos-duration="2000" className="py-24">
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
              <AccordionTrigger className="text-[32px] text-menuLinkColor font-semibold py-5 px-[50px] bg-headerBg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pt-5 pb-8 px-[55px] bg-white text-[24px] leading-[40px]">
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
