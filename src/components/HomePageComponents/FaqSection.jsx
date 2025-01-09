import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    id: 1,
    question: "How do I know if this supplement is right for me?",
    answer:
      "Our healthcare professionals can help assess your individual needs. You may also consult your doctor to see if this supplement aligns with your current health goals.",
  },
  {
    id: 2,
    question: "How long does it take to see results?",
    answer:
      "Our healthcare professionals can help assess your individual needs. You may also consult your doctor to see if this supplement aligns with your current health goals.",
  },
  {
    id: 3,
    question: "Can I take this supplement with my current medications?",
    answer:
      "Our healthcare professionals can help assess your individual needs. You may also consult your doctor to see if this supplement aligns with your current health goals.",
  },
  {
    id: 4,
    question: "Is this supplement safe for long-term use?",
    answer:
      "Our healthcare professionals can help assess your individual needs. You may also consult your doctor to see if this supplement aligns with your current health goals.",
  },
  {
    id: 5,
    question: "How should I store this supplement?",
    answer:
      "Our healthcare professionals can help assess your individual needs. You may also consult your doctor to see if this supplement aligns with your current health goals.",
  },
];

function FaqSection() {
  return (
    <section className="py-[140px]">
      <div className="container">
        {/* section title  */}
        <div className="mb-10">
          <h3 data-aos="zoom-up"
                  data-aos-duration="2000" className="text--xl text-center">Frequently Asked Questions</h3>
        </div>
        <div>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem data-aos="zoom-in"
              data-aos-duration="2000" key={item.id} value={`item-${index}`} className="border border-[#084772] rounded-[10px] overflow-hidden mt-[14px] accordion-item">
                <AccordionTrigger className="text-[32px] text-menuLinkColor font-semibold py-5 px-[50px] bg-headerBg">{item.question}</AccordionTrigger>
                <AccordionContent className="pt-5 pb-8 px-[55px] bg-white text-[24px] leading-[40px]">
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
