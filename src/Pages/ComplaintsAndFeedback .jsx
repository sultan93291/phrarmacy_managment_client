import React from "react";

const ComplaintsAndFeedback = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 text-gray-800">
      <div className="flex flex-col gap-8 pb-14 border-b border-[#78D0FF] pt-10 sm:pt-24">
        <h1 className="text-4xl font-bold text-primary text-center">
          Complaints and Feedback
        </h1>
        <p className="text-lg text-center">
          At My Health Needs we value your feedback and are committed to
          providing the highest quality of service. We have a formal complaints
          policy and mechanism in place to address any concerns you may have.
          Our goal is to ensure that all complaints are handled promptly,
          fairly, and with utmost professionalism.
        </p>
      </div>

      <div className="flex flex-col gap-8 mt-10 text-[17px] leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Filing a Complaint
          </h2>
          <p>
            If you wish to make a formal complaint, we encourage you to reach
            out to us via email. We aim to acknowledge all formal written
            complaints within five working days of receipt. Our dedicated team
            will thoroughly investigate the matter and provide a comprehensive
            response within ten working days.
          </p>
          <p className="mt-2">
            Please submit your formal complaint to:
            <br />
            <a
              href="mailto:complaints@myhealthneeds.co.uk "
              className="text-blue-600 font-medium"
            >
              complaints@myhealthneeds.co.uk
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Feedback and General Inquiries
          </h2>
          <p>
            We welcome your feedback and encourage you to share any concerns or
            suggestions about our services. You can provide feedback or make
            general inquiries by sending a message through the website’s ‘My
            Account’ section or by contacting us via the following channels:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              Email:{" "}
              <a
                href="mailto:support@myhealthneeds.co.uk"
                className="text-blue-600 font-medium"
              >
                support@myhealthneeds.co.uk
              </a>
            </li>
            <li>Phone: +44(0)2082642464 </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Escalating Unresolved Complaints
          </h2>
          <p>
            In the event that your complaint remains unresolved or you are
            dissatisfied with our response, you have the option to escalate the
            matter. Unresolved pharmacy complaints can be referred to the
            regulatory body, The General Pharmaceutical Council (GPhC). The GPhC
            is responsible for regulating pharmacies and pharmacy professionals
            in the UK. They can be contacted at:
          </p>
          <address className="mt-2 not-italic text-gray-900">
            <strong>The General Pharmaceutical Council</strong>
            <br />
            Level 14
            <br />
            One Cabot Square
            <br />
            London
            <br />
            E14 4QJ
            <br />
            Phone: 020 3713 8000
            <br />
            Website:{" "}
            <a
              href="https://www.pharmacyregulation.org/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium"
            >
              www.pharmacyregulation.org/contact-us
            </a>
          </address>
        </section>

        <section>
          <p>
            At My Health Needs we are dedicated to continuous improvement and
            appreciate your feedback. We take all complaints seriously and
            strive to resolve them in a fair and transparent manner. Your
            satisfaction is important to us, and we thank you for taking the
            time to provide valuable feedback.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ComplaintsAndFeedback;
