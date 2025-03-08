import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import axios from "axios";
import { useEffect, useState } from "react";
useState

function FaqSection() {
  const SiteURl = import.meta.env.VITE_SITE_URL;
  const [faqDatas, setfaqDatas] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${SiteURl}/api/faqs`,
    })
      .then(res => {
        // setfaqData(res?.data?.data);
        console.log(res.data.data);
        setfaqDatas(res?.data?.data)

      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log(faqDatas, " this is a faq data ");
  return (
    <section className="my-10 sm:my-20 max-w-[1000px] mx-auto faq-section">
      <div className="container">
        <div className="text-center mb-8 sm:mb-5">
          <h1 className="text-[27px] sm:text-4xl lg:text-5xl font-bold sm:mb-10  text-primryDark">
            Frequently Asked Questions
          </h1>
        </div>
        <div>
          {faqDatas?.map((item, index) => {
            return (
              <div key={index}>
                <h4 className="text-2xl sm:text-[36px] font-bold text-primryDark sm:mb-[50px] mt-[30px] sm:mt-[60px]">
                  {item?.category}
                </h4>
                <div>
                  <Accordion type="single" collapsible className="w-full">
                    {item?.questions.map(faq => (
                      <AccordionItem
                        className="bg-primaryLight rounded-lg sm:rounded-[24px] p-4 sm:p-6 mt-5"
                        key={`${item.category}-${faq.question}`}
                        value={`${item.category}-${faq.question}`}
                      >
                        <AccordionTrigger className="text-lg text-left sm:text-[24px] text-primryDark p-0">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-[17px] text-lg mt-5">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
