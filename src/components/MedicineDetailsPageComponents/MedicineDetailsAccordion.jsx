import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function MedicineDetailsAccordion() {
  return (
    <div data-aos="zoom-up"
    data-aos-duration="2000" className="py-24">
      <Accordion className="space-y-2" type="single" collapsible>
        <AccordionItem  value="item-1" className={'border-b-0'}>
          <AccordionTrigger className={'bg-[#EFF8FF]  px-4 py-4 hover:no-underline rounded-t-lg text-2xl font-semibold text-[#062C4B]'}>How do I know if this supplement is right for me?</AccordionTrigger>
          <AccordionContent className={'px-6 py-4 text-lg font-medium'}>
          Our healthcare professionals can help assess your individual needs. You may also consult your doctor to see if this supplement aligns with your current health goals.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem  className={'border-b-0'}  value="item-2">
          <AccordionTrigger className={'bg-[#EFF8FF]  px-4 py-4 hover:no-underline rounded-t-lg text-2xl font-semibold text-[#062C4B] '} >How long does it take to see results?</AccordionTrigger>
          <AccordionContent className={'px-6 py-4 text-lg font-medium'}>
          Our healthcare professionals can help assess your individual needs. You may also consult your doctor to see if this supplement aligns with your current health goals.
          Our healthcare professionals can help assess your individual needs. You may also consult your doctor to see if this supplement aligns with your current health goals.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem  className={'border-b-0'}  value="item-3">
          <AccordionTrigger className={'bg-[#EFF8FF]  px-4 py-4 hover:no-underline rounded-t-lg text-2xl font-semibold text-[#062C4B] '} >Can I take this supplement with my current medications?</AccordionTrigger>
          <AccordionContent className={'px-6 py-4 text-lg font-medium'}>
          Our healthcare professionals can help assess your individual needs. You may also consult your doctor to see if this supplement aligns with your current health goals.
          Our healthcare professionals can help assess your individual needs. You may also consult your doctor to see if this supplement aligns with your current health goals.
          Our healthcare professionals can help assess your individual needs. You may also consult your doctor to see if this supplement aligns with your current health goals.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem  className={'border-b-0'}  value="item-4">
          <AccordionTrigger className={'bg-[#EFF8FF]  px-4 py-4 hover:no-underline rounded-t-lg text-2xl font-semibold text-[#062C4B] '} >Is this supplement safe for long-term use?</AccordionTrigger>
          <AccordionContent className={'px-6 py-4 text-lg font-medium'}>
          Our healthcare professionals can help assess your individual needs. You may also consult your doctor to see if this supplement aligns with your current health goals.
          Our healthcare professionals can help assess your individual needs. You may also consult your doctor to see if this supplement aligns with your current health goals.
          Our healthcare professionals can help assess your individual needs. You may also consult your doctor to see if this supplement aligns with your current health goals.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem  className={'border-b-0'}  value="item-5">
          <AccordionTrigger className={'bg-[#EFF8FF]  px-4 py-4 hover:no-underline rounded-t-lg text-2xl font-semibold text-[#062C4B] '} >How should I store this supplement?</AccordionTrigger>
          <AccordionContent className={'px-6 py-4 text-lg font-medium'}>
          Our healthcare professionals can help assess your individual needs. You may also consult your doctor to see if this supplement aligns with your current health goals.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default MedicineDetailsAccordion;
