import { Link } from "react-router-dom";
import Logo from "../assets/images/logo/logo.svg";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TiLocationOutline } from "react-icons/ti";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";

function Footer() {
  return (
    <footer className="px-4 xl:px-[47px] text-white mt-10 mb-5 sm:my-10">
      <div
        data-aos="zoom-up"
        data-aos-duration="1000"
        className="py-10 sm:pt-[70px] sm:pb-[90px] xl:pb-[117px] bg-primryDark rounded-2xl md:rounded-[40px]"
      >
        <div className="container">
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
                We’ll show you exactly how you can achieve 30% increase in
                revenue and a 99.9% claim rate within 120 days—while focusing
                more on patient care.
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
                  23 Main Street, 12345,Pakistan
                </li>
                <li
                  data-aos="zoom-up"
                  data-aos-duration="2000"
                  className="mt-5"
                >
                  <MdOutlineEmail />
                  <Link to={"/"}>alihassanux@gmail.com</Link>
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
                <li data-aos="zoom-up" data-aos-duration="2000">
                  <Link to={"/"}>Medical Billing</Link>
                </li>
                <li data-aos="zoom-up" data-aos-duration="2000">
                  <Link to={"/"}>Medical Coding</Link>
                </li>
                <li data-aos="zoom-up" data-aos-duration="2000">
                  <Link to={"/"}>Revenue Cycle Management</Link>
                </li>
                <li data-aos="zoom-up" data-aos-duration="2000">
                  <Link to={"/"}>Practice Management</Link>
                </li>
                <li data-aos="zoom-up" data-aos-duration="2000">
                  <Link to={"/"}>Account Receivable</Link>
                </li>
                <li data-aos="zoom-up" data-aos-duration="2000">
                  <Link to={"/"}>Provider Credentialing</Link>
                </li>
                <li data-aos="zoom-up" data-aos-duration="2000">
                  <Link to={"/"}>Medical Virtual Staffing (Remote)</Link>
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
                Customer Support
              </h4>
              <ul className="-mt-7 lg:-mt-5">
                <li data-aos="zoom-up" data-aos-duration="2000">
                  <Link to={"/"}>FAQ’s</Link>
                </li>
                <li data-aos="zoom-up" data-aos-duration="2000">
                  <Link to={"/"}>Knowledge Base</Link>
                </li>
                <li data-aos="zoom-up" data-aos-duration="2000">
                  <Link to={"/"}>Privacy policy</Link>
                </li>
                <li data-aos="zoom-up" data-aos-duration="2000">
                  <Link to={"/"}>Terms and Conditions</Link>
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
                Useful Links
              </h4>
              <ul className="-mt-7 lg:-mt-5">
                <li data-aos="zoom-up" data-aos-duration="2000">
                  <Link to={"/"}>Careers</Link>
                </li>
                <li data-aos="zoom-up" data-aos-duration="2000">
                  <Link to={"/"}>Contact us</Link>
                </li>
                <li data-aos="zoom-up" data-aos-duration="2000">
                  <Link to={"/"}>Unsubscribe</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
