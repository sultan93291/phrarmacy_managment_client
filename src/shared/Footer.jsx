import { Link } from "react-router-dom";
import Logo from "../assets/images/logo/logo.svg";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TiLocationOutline } from "react-icons/ti";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";

const healthIssues = [
  "Hair Loss",
  "Weight Loss",
  "Erectile Dysfunction",
  "Sexual Health",
];

const infoSections = [
  "How it works",
  "Regulation",
  "Privacy Policy",
  "Terms and Conditions",
  "FAQs",
  "Complaints and Feedback",
  "Cookies Policy",
];

const contactOptions = ["Careers", "Contact us", "Unsubscribe"];

function Footer() {
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
                <li data-aos="zoom-up" data-aos-duration="2000">
                  <Link to={"/"}>
                    <FaFacebook />
                  </Link>
                </li>
                <li data-aos="zoom-up" data-aos-duration="2000">
                  <Link to={"/"}>
                    <FaYoutube />
                  </Link>
                </li>
                <li data-aos="zoom-up" data-aos-duration="2000">
                  <Link to={"/"}>
                    <FaInstagram />
                  </Link>
                </li>
                <li data-aos="zoom-up" data-aos-duration="2000">
                  <Link to={"/"}>
                    <FaLinkedin />
                  </Link>
                </li>
              </ul>
              {/* footer contacts  */}
              <ul
                data-aos="zoom-up"
                data-aos-duration="2000"
                className="footer-contacts mt-10"
              >
                <li data-aos="zoom-up" data-aos-duration="2000">
                  <TiLocationOutline />
                  12 St Dunstand's Hill Sutton, SM1 2UE123
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
                  <Link to={"/"}>1234567890</Link>
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
                      <Link to={"/"}> {item} </Link>
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
                    <li data-aos="zoom-up" data-aos-duration="2000">
                      <Link to={"/"}> {item} </Link>
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
                      <Link to={"/"}> {item} </Link>
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
            registration status on the GPhC website.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
