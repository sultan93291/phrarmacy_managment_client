import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 text-gray-800">
      <div className="flex flex-col gap-6 pb-14 border-b border-[#78D0FF] pt-10 sm:pt-24 aos-init aos-animate">
        <h1 className="text-5xl font-bold text-primary text-center">
          Privacy Policy
        </h1>
        <p className="text-xl text-center leading-relaxed">
          My Health Needs is committed to protecting and respecting your
          privacy. This policy explains how we handle your data in line with
          GDPR and UK laws.
        </p>
      </div>

      <div className="flex flex-col gap-8 mt-12 text-lg leading-loose">
        {[
          {
            title: "1. Introduction",
            content:
              "This privacy policy outlines how we collect, use, store, and protect your personal data under GDPR and applicable UK data protection laws.",
          },
          {
            title: "2. Information We Collect",
            list: [
              "Personal identification (Name, address, date of birth, email, phone)",
              "Health and medical info during consultations",
              "Transaction details and purchase history",
              "Technical data (IP, browser, device info)",
              "Communication records with customer service",
            ],
          },
          {
            title: "3. How We Use Your Information",
            list: [
              "Provide healthcare services and prescriptions",
              "Fulfil and deliver orders",
              "Contact about orders or consultations",
              "Improve services and website",
              "Meet legal/regulatory requirements",
            ],
          },
          {
            title: "4. Legal Basis for Processing",
            list: [
              "Consent (when required)",
              "Performance of a contract",
              "Compliance with legal obligations",
              "Legitimate interest in improving services",
            ],
          },
          {
            title: "5. Sharing Your Information",
            content: "We do not sell your data. We may share with:",
            list: [
              "Partner pharmacies (prescription fulfilment)",
              "Healthcare professionals",
              "IT providers and payment processors",
              "Regulatory authorities (when legally required)",
            ],
          },
          {
            title: "6. Data Security",
            content:
              "We apply appropriate technical and organizational measures to safeguard your data. Stored securely and accessed only by authorized staff.",
          },
          {
            title: "7. Data Retention",
            content:
              "Your data is retained only as long as necessary for the purposes we collected it for, including legal, accounting, or regulatory requirements.",
          },
          {
            title: "8. Your Rights",
            content: "Under GDPR, you have the right to:",
            list: [
              "Access your data",
              "Request rectification or deletion",
              "Restrict or object to processing",
              "Request data portability",
              "Withdraw consent anytime",
            ],
          },
          {
            title: "9. Cookies",
            content:
              "Our website uses cookies to improve user experience. You can manage cookie settings via your browser.",
          },
          {
            title: "10. Contact Us",
            content: (
              <>
                For questions about this privacy policy or how we handle your
                data, please contact us at:
                <br />
                <a
                  href="mailto:support@myhealthneeds.co.uk"
                  className="text-blue-600 font-medium"
                >
                  support@myhealthneeds.co.uk
                </a>
              </>
            ),
          },
        ].map((section, i) => (
          <section key={i}>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              {section.title}
            </h2>
            {section.content && <p className="mb-3">{section.content}</p>}
            {section.list && (
              <ul className="list-disc pl-6 space-y-2">
                {section.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
