import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 text-gray-800">
      <div className="flex flex-col gap-8 pb-14 border-b border-[#78D0FF] pt-10 sm:pt-24 aos-init aos-animate">
        <h1 className="text-4xl font-bold text-primary text-center">
          Terms and Conditions
        </h1>
        <p className="text-lg text-center">Effective Date: 12 May 2025</p>
      </div>

      <div className="flex flex-col gap-8 mt-10 text-[17px] leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            1. Introduction
          </h2>
          <p>
            Welcome to Myhealthneeds.co.uk. This website is operated by My
            Health Needs Ltd, a company registered in England and Wales under
            company number 15808096, with its registered office at 12 St.
            Dunstans Hill, Cheam, Sutton, England, SM1 2UE.
          </p>
          <p className="mt-2">
            My Health Needs Ltd is registered with the General Pharmaceutical
            Council (GPhC) under registration number 1234567 and complies with
            all regulations set forth by the Medicines and Healthcare products
            Regulatory Agency (MHRA).
          </p>
          <p className="mt-2">
            By accessing and using our website, you agree to comply with and be
            bound by these Terms and Conditions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            2. Information on the Website
          </h2>
          <p>
            All content provided on this website is for informational purposes
            only and is not intended as a substitute for professional medical
            advice, diagnosis, or treatment. Always seek the advice of your
            physician or other qualified health providers with any questions you
            may have regarding a medical condition.
          </p>
          <p className="mt-2">
            We strive to ensure that all information on our website is accurate
            and up to date. However, we do not guarantee the completeness or
            accuracy of the information provided. Product images are for
            illustrative purposes only, and actual products may vary.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            3. Account Registration
          </h2>
          <p>
            To place an order, you must be at least 18 years old and reside in
            the United Kingdom. You are responsible for maintaining the
            confidentiality of your account information and password. Any
            activities that occur under your account are your responsibility.
          </p>
          <p className="mt-2">
            If you suspect any unauthorised use of your account, please contact
            us immediately at{" "}
            <a
              href="mailto:support@myhealthneeds.co.uk"
              className="text-blue-600 font-medium"
            >
              support@myhealthneeds.co.uk
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            4. Ordering and Prescription Process
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Placing an Order:</strong> Orders can be placed through
              our website by following the online prompts. You will be required
              to complete a medical questionnaire, which will be reviewed by a
              qualified healthcare professional.
            </li>
            <li>
              <strong>Prescription Approval:</strong> All prescriptions are
              subject to approval by our licensed clinicians. We reserve the
              right to refuse any order based on the information provided or if
              it is deemed not in the patient’s best interest.
            </li>
            <li>
              <strong>Identity Verification:</strong> To comply with regulatory
              requirements, we may request photographic identification and a
              short video for identity verification purposes. Failure to provide
              this may result in delays or cancellation of your order.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            5. Delivery
          </h2>
          <p>
            We aim to dispatch approved orders promptly. Delivery times may vary
            based on location and product availability. We are not liable for
            delays caused by third-party courier services.
          </p>
          <p className="mt-2">
            Delivery is deemed complete once the product is delivered to the
            address specified in your order. It is your responsibility to ensure
            that the delivery address is accurate and that someone is available
            to receive the package.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            6. Pricing and Payment
          </h2>
          <p>
            All prices are inclusive of VAT where applicable. Payment must be
            made at the time of ordering using a valid credit or debit card. We
            reserve the right to change prices at any time without prior notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            7. Refund and Cancellation Policy
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Non-Returnable Items:</strong> Due to health and safety
              regulations, we cannot accept returns of medicinal products once
              dispatched, unless the products are faulty or not as described.
            </li>
            <li>
              <strong>Order Cancellation:</strong> You may cancel your order
              before it has been dispatched. To cancel, please contact our
              Customer Support Team at{" "}
              <a
                href="mailto:support@myhealthneeds.co.uk"
                className="text-blue-600 font-medium"
              >
                support@myhealthneeds.co.uk
              </a>
              .
            </li>
            <li>
              <strong>Refunds:</strong> If you are eligible for a refund, it
              will be processed using the original payment method within 14 days
              of confirmation. Please note that certain administrative fees may
              apply.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            8. Complaints Procedure
          </h2>
          <p>
            We are committed to providing high-quality services. If you are
            dissatisfied with any aspect of our service, please contact us:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Email: complaints@myhealthneeds.co.uk</li>
            <li>Phone: 12345678</li>
            <li>
              Address: Complaints Department, My Health Needs Ltd, 12 St.
              Dunstans Hill, Cheam, Sutton, England, SM1 2UE
            </li>
          </ul>
          <p className="mt-2">
            We aim to acknowledge complaints within 3 working days and resolve
            them within 20 working days. If you are not satisfied with our
            response, you may escalate the matter to the General Pharmaceutical
            Council (GPhC) or NHS England.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            9. Data Protection and Privacy Policy
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>GDPR Compliance:</strong> We adhere to the UK GDPR and the
              Data Protection Act 2018. Your data is used solely for the
              provision of our services.
            </li>
            <li>
              <strong>Data Usage:</strong> We collect information such as your
              name, medical history, and payment details for order processing
              and safe service provision.
            </li>
            <li>
              <strong>Data Security:</strong> We implement appropriate technical
              measures to safeguard your data.
            </li>
            <li>
              <strong>Your Rights:</strong> You have the right to access,
              rectify, or erase your data. See our full privacy policy for more
              details.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            10. Cookies
          </h2>
          <p>
            Our website uses cookies to enhance your browsing experience. By
            continuing to use our website, you consent to our use of cookies.
            Please refer to our cookies policy for more information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            11. External Links
          </h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the content or privacy practices of those websites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            12. Limitation of Liability
          </h2>
          <p>
            Nothing in these Terms limits our liability for death or injury
            caused by our negligence. We exclude all warranties and liability as
            permitted by law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            13. Changes to Terms and Conditions
          </h2>
          <p>
            We reserve the right to update these Terms and Conditions at any
            time. Any changes will be posted on this page, and it is your
            responsibility to review them periodically.
          </p>
        </section>

        <section className="pb-14">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            14. Governing Law
          </h2>
          <p>
            These Terms are governed by the laws of England and Wales. Any
            disputes shall be subject to the exclusive jurisdiction of the
            courts of England and Wales.
          </p>
          <p className="mt-2">
            <strong>Contact Information:</strong>
            <br />
            Customer Support:{" "}
            <a
              href="mailto:support@myhealthneeds.co.uk"
              className="text-blue-600 font-medium"
            >
              support@myhealthneeds.co.uk
            </a>
            <br />
            Phone: xxxxxxxxxx
            <br />
            Address: 12 St. Dunstans Hill, Cheam, Sutton, England, SM1 2UE
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
