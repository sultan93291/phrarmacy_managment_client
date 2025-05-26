import React from "react";

const RegulationPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 text-gray-800">
      <div className="flex flex-col gap-8 pb-14 border-b border-[#78D0FF] pt-10 sm:pt-24 aos-init aos-animate">
        <h1 className="text-4xl font-bold text-primary text-center">
          Regulation Policy
        </h1>
        <p className="text-lg text-center">
          Our prescribers are registered and regulated to ensure the delivery of
          safe, effective, and legally compliant healthcare services.
        </p>
      </div>

      <div className="flex flex-col gap-8 mt-10 text-[17px] leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            1. How Prescribers Are Regulated
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              All prescribers affiliated with My Health Needs are qualified
              healthcare professionals, such as pharmacists or doctors, who have
              completed accredited training programs.
            </li>
            <li>
              Each prescriber holds a valid registration with the General
              Pharmaceutical Council (GPhC), with their registration status and
              number verifiable through the{" "}
              <a
                href="https://www.pharmacyregulation.org/registers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium"
              >
                GPhC online register
              </a>
              .
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            2. Independent Prescriber Status
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Prescribers designated as independent prescribers have
              successfully completed GPhC-accredited training programs,
              including theoretical instruction and supervised practical
              experience.
            </li>
            <li>
              Their independent prescriber status is officially annotated on the
              GPhC register, confirming their authority to assess, diagnose, and
              prescribe treatments within their areas of clinical competence.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            3. Verification and Transparency
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              We ensure transparency by prominently displaying the names and
              GPhC registration numbers of our prescribers on our website.
            </li>
            <li>
              Patients can verify registration and prescriber status by visiting
              the{" "}
              <a
                href="https://www.pharmacyregulation.org/registers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium"
              >
                official GPhC register
              </a>
              .
            </li>
          </ul>
        </section>

        <section className="pb-14">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            4. Compliance with GPhC Guidelines
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Our online pharmacy operations strictly follow the GPhC's guidance
              for providing pharmacy services at a distance, including online.
            </li>
            <li>
              We conduct regular audits and risk assessments to ensure ongoing
              compliance and maintain the highest levels of patient safety and
              care.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default RegulationPolicy;
