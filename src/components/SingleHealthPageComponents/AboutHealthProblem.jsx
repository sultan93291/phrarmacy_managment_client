import aboutImg from "../../assets/images/about-disease.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    id: 1,
    question: "What is hair loss?",
    answer:
      "Hair loss, or alopecia, is the partial or complete loss of hair, often caused by genetics, aging, hormonal changes, stress, or medical conditions.",
  },
  {
    id: 2,
    question: "What causes hair loss?",
    answer:
      "Our healthcare professionals can help assess your individual needs. You may also consult your doctor to see if this supplement aligns with your current health goals.",
  },
  {
    id: 3,
    question: "How does hair loss treatment work?",
    answer:
      "Our healthcare professionals can help assess your individual needs. You may also consult your doctor to see if this supplement aligns with your current health goals.",
  },
];

function AboutHealthProblem(data) {
  const mainData = data?.data?.data;
  console.log("i'm main data", mainData);
  const SiteURl = import.meta.env.VITE_SITE_URL;

  return (
    <section className="mb-[140px]">
      <div className="container">
        <div className="flex items-center gap-[148px]">
          {/* about disease  */}
          <div className="w-[571px]">
            <h3
              data-aos="zoom-up"
              data-aos-duration="2000"
              className="text--xl"
            >
              {mainData?.about?.title}
            </h3>
            <div className="mt-[22px]">
              <img
                data-aos="zoom-in"
                data-aos-duration="2000"
                className="h-[582px] w-full object-cover"
                src={`${SiteURl}/${mainData?.about?.avatar}`}
                alt="aboutImg"
              />
            </div>
            <p className="text-[20px] mt-[22px] text-categoryBtnColor">
              {mainData?.about?.short_description}
            </p>
          </div>
          {/* related faq  */}
          <div className="text-left about-faq w-[750px]">
            <Accordion type="single" collapsible className="w-full">
              {mainData?.faqs?.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  value={`item-${index}`}
                  className="bg-[#eff8ff]rounded-[10px] overflow-hidden mt-[14px] accordion-item"
                >
                  <AccordionTrigger className="text-[24px] text-menuLinkColor font-medium py-5 px-[50px] bg-headerBg">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pt-5 pb-8 px-[55px] bg-[#eff8ff] text-[24px] leading-[40px]">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHealthProblem;
