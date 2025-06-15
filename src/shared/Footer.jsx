import { Link } from "react-router-dom";
import Logo from "../assets/images/logo/logo.svg";
import { TiLocationOutline } from "react-icons/ti";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaWhatsapp,
  FaTiktok,
  FaSnapchat,
  FaPinterest,
  FaReddit,
  FaTwitch,
  FaDiscord,
  FaGoogle,
  FaDribbble,
  FaMedium,
  FaVimeo,
  FaTelegram,
  FaTumblr,
} from "react-icons/fa";
import { useState } from "react";
import { useGetSocailMediaQuery } from "@/Redux/features/api/apiSlice";

const symptomsData = [
  { id: 1, title: "Weight Loss", imgUrl: "", buttonLink: "/service/140" },
  {
    id: 2,
    title: "Erectile dysfunction",
    imgUrl: "",
    buttonLink: "/service/144",
  },
  { id: 3, title: "Sexual Health", imgUrl: "", buttonLink: "/service/116" },
  { id: 4, title: "Hair Loss", imgUrl: "", buttonLink: "/service/143" },
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
  { label: "Careers", redirectLink: "/" },
  { label: "Contact us", redirectLink: "/contact-us" },
];

const iconFallbackMap = {
  facebook: <FaFacebook />,
  youtube: <FaYoutube />,
  instagram: <FaInstagram />,
  linkedin: <FaLinkedin />,
  twitter: <FaTwitter />,
  github: <FaGithub />,
  whatsapp: <FaWhatsapp />,
  tiktok: <FaTiktok />,
  snapchat: <FaSnapchat />,
  pinterest: <FaPinterest />,
  reddit: <FaReddit />,
  twitch: <FaTwitch />,
  discord: <FaDiscord />,
  google: <FaGoogle />,
  dribbble: <FaDribbble />,
  medium: <FaMedium />,
  vimeo: <FaVimeo />,
  telegram: <FaTelegram />,
  tumblr: <FaTumblr />,
};

const Footer = () => {
  const [imgError, setImgError] = useState(false);
  const { data } = useGetSocailMediaQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const SiteURL = import.meta.env.VITE_SITE_URL;

  return (
    <footer className="px-4 xl:px-[47px] text-white mt-10 mb-5 sm:my-10">
      <div
        data-aos="zoom-up"
        data-aos-duration="1000"
        className="py-10 sm:pt-[70px] sm:pb-[90px] xl:pb-[117px] bg-primryDark rounded-2xl md:rounded-[40px]"
      >
        <div className="container flex flex-col gap-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:flex xl:gap-[100px] gap-8">
            {/* Brand Info */}
            <div
              className="footer-box"
              data-aos="zoom-up"
              data-aos-duration="2000"
            >
              <img src={Logo} alt="logo" className="max-w-[67px] h-[67px]" />
              <p className="max-w-[444px] mt-6">
                At My Health Needs we are committed to delivering trusted,
                affordable, and accessible healthcare solutions. Our mission is
                to provide a seamless online pharmacy experience, ensuring your
                health and well-being are always our top priority.
              </p>
              {/* Social Media */}
              <ul className="flex items-center gap-5 text-[24px] mt-6">
                {data?.data?.map((item, idx) => {
                  
                  const key = item?.title?.toLowerCase();
                  return (
                    <li
                      key={idx}
                      onClick={() => window.open(item?.url, "_blank")}
                      className="cursor-pointer"
                    >
                      {!imgError ? (
                        <img
                          src={`${SiteURL}/${item?.icon}`}
                          alt={item?.title}
                          className="max-h-10 max-w-10 object-cover"
                          onError={() => setImgError(true)}
                        />
                      ) : (
                        <span className="text-[32px]">
                          {iconFallbackMap[key] || <FaFacebook />}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* Contact Info */}
              <ul className="footer-contacts mt-10 space-y-5 text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <TiLocationOutline /> 12 St Dunstand's Hill Sutton, SM1 2UE
                </li>
                <li className="flex items-center gap-2">
                  <MdOutlineEmail />
                  <a href="mailto:info@myhealthneeds.co.uk">
                    info@myhealthneeds.co.uk
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MdOutlinePhone />
                  <span>+44(0)2082642464</span>
                </li>
              </ul>
            </div>

            {/* Popular Treatments */}
            <div
              className="footer--box lg:mt-6 links"
              data-aos="zoom-up"
              data-aos-duration="2000"
            >
              <h4 className="font-semibold mb-2">Popular Treatments</h4>
              <ul className="space-y-2">
                {symptomsData.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.buttonLink}
                      className="hover:text-black duration-200"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Support */}
            <div
              className="footer--box lg:mt-6 links"
              data-aos="zoom-up"
              data-aos-duration="2000"
            >
              <h4 className="font-semibold mb-2">Customer Support</h4>
              <ul className="space-y-2">
                {infoSections.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.link}
                      className="hover:text-black duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div
              className="footer--box lg:mt-6 links"
              data-aos="zoom-up"
              data-aos-duration="2000"
            >
              <h4 className="font-semibold mb-2">Useful Links</h4>
              <ul className="space-y-2">
                {contactOptions.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.redirectLink}
                      className="hover:text-black duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Legal Notice */}
          <p className="text-sm mt-10 leading-6">
            © 2025 My Health Needs Ltd. All rights reserved. My Health Needs Ltd
            is a registered UK company (Company No. 15808096). Our pharmacy
            premises are registered with the General Pharmaceutical Council
            (GPhC No. 12345678). Superintendent Pharmacist and Independent
            Prescriber: Araim Zeenah, GPhC No. 2077620. Our prescribers are
            regulated by the General Pharmaceutical Council. You can verify our
            registration status on the
            <a
              href="https://www.pharmacyregulation.org/registers"
              target="_blank"
              rel="noreferrer"
              className="text-blue-200 underline ml-1"
            >
              GPhC website.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
