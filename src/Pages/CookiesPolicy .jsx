import React from "react";

const CookiesPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 text-gray-800">
      <div className="flex flex-col gap-8 pb-14 border-b border-[#78D0FF] pt-10 sm:pt-24">
        <h1 className="text-4xl font-bold text-primary text-center">
          Cookies Policy
        </h1>
        <p className="text-lg text-center">Effective Date: 26 May 2025</p>
      </div>

      <div className="flex flex-col gap-8 mt-10 text-[17px] leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            1. Introduction
          </h2>
          <p>
            My Health Needs uses cookies and similar technologies on our website
            myhealthneeds.co.uk to improve your browsing experience, personalize
            content, and analyse our traffic. This Cookies Policy explains what
            cookies are, how we use them, and your rights to control their use.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            2. What Are Cookies?
          </h2>
          <p>
            Cookies are small text files stored on your device (computer,
            tablet, mobile) when you visit a website. They help us remember your
            preferences, enable secure logins, and gather analytical data to
            improve our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            3. Types of Cookies We Use
          </h2>
          <p>We use the following categories of cookies:</p>

          <ul className="list-disc pl-6 space-y-4 mt-4">
            <li>
              <strong>a. Strictly Necessary Cookies</strong>
              <br />
              These cookies are essential for the operation of our Site. They
              enable core functions such as security, account login, and
              shopping cart functionality.
              <br />
              <em>Examples:</em>
              <br />
              Session ID to track user login
              <br />
              Cart contents
              <br />
              Consent management
            </li>

            <li>
              <strong>b. Functional Cookies</strong>
              <br />
              These cookies allow the website to remember choices you make
              (e.g., language, region, or persistent logins).
            </li>

            <li>
              <strong>c. Performance and Analytics Cookies</strong>
              <br />
              Used to collect information on how visitors use our Site, such as
              pages visited, time spent on the site, and any errors encountered.
              This helps us improve the functionality and user experience.
              <br />
              <em>Example Tools:</em>
              <br />
              • Google Analytics
              <br />• Hotjar
            </li>

            <li>
              <strong>d. Marketing and Advertising Cookies</strong>
              <br />
              These cookies track your browsing habits to enable us to show you
              relevant ads or personalized offers.
              <br />
              <em>Note:</em> We only use these cookies with your explicit
              consent.
            </li>

            <li>
              <strong>e. Third-Party Cookies</strong>
              <br />
              We may allow third-party service providers (e.g., payment
              processors, delivery services, or marketing platforms) to place
              cookies on your device to provide their services through our Site.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            4. Cookie Duration
          </h2>
          <p>
            Cookies may be:
            <br />
            <strong>Session cookies</strong>, which are deleted when you close
            your browser.
            <br />
            <strong>Persistent cookies</strong>, which remain on your device
            until they expire or are deleted manually.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            5. Managing Cookies
          </h2>
          <p>You can control and/or delete cookies as you wish:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Adjust your browser settings to refuse some or all cookies.</li>
            <li>
              Use the cookie banner or preference center on our Site to manage
              consent.
            </li>
          </ul>
          <p className="mt-2">
            <strong>Note:</strong> Blocking certain cookies may affect your
            ability to use some parts of our Site, including ordering
            medications or accessing your account.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            6. Updates to This Policy
          </h2>
          <p>
            We may update this Cookies Policy from time to time to reflect
            changes in technology, law, or our practices. Any updates will be
            posted on this page with the updated effective date.
          </p>
        </section>

        <section className="pb-14">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            7. Contact Us
          </h2>
          <p>
            If you have any questions about our use of cookies, please contact
            us at{" "}
            <a
              href="mailto:support@myhealthneeds.co.uk"
              className="text-blue-600 font-medium"
            >
              support@myhealthneeds.co.uk
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default CookiesPolicy;
