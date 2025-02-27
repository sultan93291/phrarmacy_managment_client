import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import axios from "axios";
import { useEffect, useState } from "react";
useState
// const faqData = [
//   {
//     category: "Placing an order",
//     questions: [
//       {
//         question: "How do I place an order?",
//         answer:
//           "You can place an order online through our website by adding items to your cart and checking out.",
//       },
//       {
//         question: "Can I place an order over the phone?",
//         answer:
//           "Yes, you can place an order over the phone by calling our customer support team.",
//       },
//       {
//         question: "What payment methods do you accept?",
//         answer:
//           "We accept various payment methods, including credit/debit cards, online wallets, and bank transfers.",
//       },
//       {
//         question: "Are the medications you prescribe genuine?",
//         answer:
//           "Yes, all medications we prescribe are sourced from verified manufacturers and are 100% genuine.",
//       },
//     ],
//   },
//   {
//     category: "Delivery",
//     questions: [
//       {
//         question: "What delivery options do you offer?",
//         answer:
//           "We offer standard and express delivery options to suit your needs.",
//       },
//       {
//         question: "How long will my delivery take?",
//         answer:
//           "Delivery times vary based on the selected option, typically ranging from 2 to 7 business days.",
//       },
//       {
//         question: "How much does delivery cost?",
//         answer:
//           "Delivery costs depend on the shipping option and your location; standard shipping starts at $5.",
//       },
//       {
//         question: "Can I track my delivery?",
//         answer:
//           "Yes, you can track your delivery using the tracking link provided after placing your order.",
//       },
//       {
//         question: "What should I do if my delivery is delayed?",
//         answer:
//           "If your delivery is delayed, please contact our customer service team for assistance.",
//       },
//       {
//         question: "Can I change my delivery address after placing an order?",
//         answer:
//           "You can update your delivery address before the order is dispatched by contacting customer support.",
//       },
//     ],
//   },
//   {
//     category: "About My Health Needs",
//     questions: [
//       {
//         question: "What is MyHealthNeeds?",
//         answer:
//           "MyHealthNeeds is an online platform providing healthcare products, information, and support.",
//       },
//       {
//         question: "What services does MyHealthNeeds offer?",
//         answer:
//           "We offer a range of healthcare products, prescription services, and expert advice.",
//       },
//       {
//         question: "Are the products from MyHealthNeeds safe?",
//         answer:
//           "Yes, all our products are rigorously tested and approved for safety and effectiveness.",
//       },
//       {
//         question:
//           "Do I need a prescription to purchase products from MyHealthNeeds?",
//         answer:
//           "Some products require a valid prescription, which can be uploaded during the purchase process.",
//       },
//       {
//         question: "How long does delivery take with MyHealthNeeds?",
//         answer:
//           "Delivery times depend on your location and shipping option, ranging from 2 to 7 days.",
//       },
//       {
//         question: "Can I return a product purchased from MyHealthNeeds?",
//         answer:
//           "Yes, products can be returned within 14 days if they meet our return policy criteria.",
//       },
//     ],
//   },
// ];
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
