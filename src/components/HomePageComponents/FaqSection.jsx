"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import axios from "axios";
import { useEffect, useState } from "react";


function FaqSection() {
  const SiteURl = import.meta.env.VITE_SITE_URL;
  const [faqData, setfaqData] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${SiteURl}/api/faq/supplement`,
    })
      .then((res) => {
        setfaqData(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(faqData, " this is a faq data ");

  return (
    <section className="my-14 sm:my-20">
      <div className="container">
        {/* section title  */}
        <div className="mb-7 sm:mb-10">
          <h3
            data-aos="zoom-up"
            data-aos-duration="2000"
            className="lg:text--xl text-[28px] sm:text-3xl md:text-4xl opacity-1 text-[#0ca6fc] font-bold text-center"
          >
            Frequently Asked Questions
          </h3>
        </div>
        <div>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem
                data-aos="zoom-in"
                data-aos-duration="2000"
                key={item.id}
                value={`item-${index}`}
                className="border border-[#084772] rounded-[10px] overflow-hidden mt-[14px] accordion-item"
              >
                <AccordionTrigger className="text-left text-lg xl:text-xl md:text-2xl lg:text-[32px] text-menuLinkColor font-semibold md:py-5 px-2 md:px-[50px] bg-headerBg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-xl pt-5 pb-8 px-5 md:px-[55px] bg-white sm:leading-[40px]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
