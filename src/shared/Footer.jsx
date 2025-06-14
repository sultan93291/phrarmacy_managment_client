import { Link, redirect } from "react-router-dom";
import Logo from "../assets/images/logo/logo.svg";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TiLocationOutline } from "react-icons/ti";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { useGetSocailMediaQuery } from "@/Redux/features/api/apiSlice";

const healthIssues = [
  "Hair Loss",
  "Weight Loss",
  "Erectile Dysfunction",
  "Sexual Health",
];

const infoSections = [
  { label: "How it works", link: "/howitworks" },
  { label: "Regulation", link: "/regulation" },
  { label: "Privacy Policy", link: "/privacypolicy" },
  { label: "Terms and Conditions", link: "/terms" },
  { label: "FAQs", link: "/faq" },
  { label: "Complaints and Feedback", link: "/complaints" },
  { label: "Cookies Policy", link: "/cookies" },
];

const contactOptions = [
  {
    label: "Careers",
    redirectLink: "/",
  },
  {
    label: "Contact us",
    redirectLink: "/contact-us",
  },
];
function Footer() {
  const { data, error, isLoading } = useGetSocailMediaQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const SiteURl = import.meta.env.VITE_SITE_URL;



  return (
    <footer className="px-4 xl:px-[47px] text-white mt-10 mb-5 sm:my-10">
      <div
        data-aos="zoom-up"
        data-aos-duration="1000"
        className="py-10 sm:pt-[70px] sm:pb-[90px] xl:pb-[117px] bg-primryDark rounded-2xl md:rounded-[40px]"
      >
        <div className="container flex flex-col gap-y-10   ">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full xl:flex items-start justify-between gap-8 xl:gap-[100px]">
            {/* footer box  */}
            <div
              data-aos="zoom-up"
              data-aos-duration="2000"
              className="footer-box"
            >
              <img
                data-aos="zoom-up"
                data-aos-duration="1000"
                className="max-w-[67px] h-[67px]"
                src={Logo}
                alt="logo"
              />
              <p
                data-aos="zoom-up"
                data-aos-duration="2000"
                className="max-w-[444px] mt-6"
              >
                At My Health Needs we are committed to delivering trusted,
                affordable, and accessible healthcare solutions. Our mission is
                to provide a seamless online pharmacy experience, ensuring your
                health and well-being are always our top priority.
              </p>
              {/* footer social  */}
              <ul
                data-aos="zoom-up"
                data-aos-duration="2000"
                className="flex items-center gap-5 text-[24px] mt-6"
              >
                {data?.data?.map((item, idx) => {
                 return (
                   <li
                     key={idx}
                     data-aos="zoom-up"
                     className="cursor-pointer"
                     data-aos-duration="2000"
                   >
                     <img
                       src={`${SiteURl}/${item?.icon}`}
                       alt={item?.title}
                       data-aos="zoom-up"
                       data-aos-duration="2000"
                       className="max-h-10 max-w-10 object-fit-cover"
                       onClick={() => {
                         window.location.href = item?.url;
                       }}
                     />
                   </li>
                 );
                
                })}
              </ul>
              {/* footer contacts  */}
              <ul
                data-aos="zoom-up"
                data-aos-duration="2000"
                className="footer-contacts mt-10"
              >
                <li data-aos="zoom-up" data-aos-duration="2000">
                  <TiLocationOutline />
                  12 St Dunstand's Hill Sutton, SM1 2UE
                </li>
                <li
                  data-aos="zoom-up"
                  data-aos-duration="2000"
                  className="mt-5"
                >
                  <MdOutlineEmail />
                  <a href="mailto:info@myhealthneeds.co.uk">
                    info@myhealthneeds.co.uk
                  </a>
                </li>
                <li
                  data-aos="zoom-up"
                  data-aos-duration="2000"
                  className="mt-5"
                >
                  <MdOutlinePhone />
                  <p to={""}>+44(0)2082642464</p>
                </li>
              </ul>
            </div>
            {/* footer box  */}
            <div
              data-aos="zoom-up"
              data-aos-duration="2000"
              className="footer--box lg:mt-6 links"
            >
              <h4 data-aos="zoom-up" data-aos-duration="2000">
                Our Services
              </h4>
              <ul className="-mt-7 lg:-mt-5">
                {healthIssues.map((item, idx) => {
                  return (
                    <li key={idx} data-aos="zoom-up" data-aos-duration="2000">
                      <Link
                        className="duration-200 ease-in-out hover:text-black"
                        to={"/service"}
                      >
                        {" "}
                        {item}{" "}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* footer box  */}
            <div
              data-aos="zoom-up"
              data-aos-duration="2000"
              className="footer--box lg:mt-6 links"
            >
              <h4 data-aos="zoom-up" data-aos-duration="2000">
                Customer Support
              </h4>
              <ul className="-mt-7 lg:-mt-5">
                {infoSections.map((item, idx) => {
                  return (
                    <li key={idx} data-aos="zoom-up" data-aos-duration="2000">
                      <Link
                        className="duration-200 ease-in-out hover:text-black"
                        to={item.link}
                      >
                        {" "}
                        {item?.label}{" "}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* footer box  */}
            <div
              data-aos="zoom-up"
              data-aos-duration="2000"
              className="footer--box lg:mt-6 links"
            >
              <h4 data-aos="zoom-up" data-aos-duration="2000">
                Useful Links
              </h4>
              <ul className="-mt-7 lg:-mt-5">
                {contactOptions.map((item, idx) => {
                  return (
                    <li data-aos="zoom-up" data-aos-duration="2000">
                      <Link
                        to={item.redirectLink}
                        className="duration-200 ease-in-out hover:text-black"
                      >
                        {" "}
                        {item.label}{" "}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <p>
            © 2025 My Health Needs Ltd. All rights reserved. My Health Needs Ltd
            is a registered UK company (Company No. 15808096). Our pharmacy
            premises are registered with the General Pharmaceutical Council
            (GPhC No. 12345678). Superintendent Pharmacist and Independent
            Prescriber: Araim Zeenah, GPhC No. 2077620.Our prescribers are
            regulated by the General Pharmaceutical Council. You can verify our
            registration status on the
            <a
              className="text-blue-200 underline ml-1 "
              href="https://www.pharmacyregulation.org/registers"
            >
              GPhC website.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
