import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaSquareInstagram, FaSquareWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

import {
  HTTP_ROUTE,
  HTTP_ROUTE_MED_ABOUT,
  HTTP_ROUTE_MED_DOCTORS,
  HTTP_ROUTE_MED_FAQ,
  HTTP_ROUTE_MED_SERVICES,
  HTTP_ROUTE_TIGRIS_CONTACT,
  HTTP_ROUTE_TIGRIS_TARGET
} from "../../data";

export const MedFooter = () => {
  const socialLinks = [
    { icon: <FaPhoneAlt />, color: "text-gray-400" },
    { icon: <FaSquareWhatsapp />, color: "text-green-400" },
    { icon: <FaSquareInstagram />, color: "text-pink-400" },
    { icon: <IoMail />, color: "text-blue-400" },
  ];

  const usefulLinks = [
    { name: "About us", url: `${HTTP_ROUTE_MED_ABOUT}` },
    { name: "Our Doctors", url: `${HTTP_ROUTE_MED_DOCTORS}` },
    { name: "Our Services", url: `${HTTP_ROUTE_MED_SERVICES}` },
    { name: "Contact us", url: `${HTTP_ROUTE_TIGRIS_CONTACT}` },
    { name: "FAQ", url: `${HTTP_ROUTE_MED_FAQ}` },
  ];

  const otherResources = [
    { name: "MIT License", url: "#" },
    { name: "Terms & Conditions", url: "#" },
    { name: "Privacy Policy", url: "#" },
    { name: "Connect With Us", url: `${HTTP_ROUTE_TIGRIS_CONTACT}` },
  ];

  const sourceLinks = [
    { name: "Tigris Health", url: `${HTTP_ROUTE.website2.path}` },
    { name: "Tigris Group", url: `/` },
    { name: "Tigris Tourism", url: `${HTTP_ROUTE_TIGRIS_TARGET}` },
    { name: "Tigris Medical", url: `${HTTP_ROUTE_MED_ABOUT}` },
  ];

  return (
    <footer className="relative bg-gray-200 pt-6 sm:pt-8 pb-4 sm:pb-6">
      <div className="absolute top-0 left-0 right-0 w-full pointer-events-none overflow-hidden -mt-16 sm:-mt-20 h-16 sm:h-20">
        <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2560 100">
          <polygon className="text-gray-200 fill-current" points="2560 0 2560 100 0 100" />
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-center sm:text-left">
          {/* Блок с названием и соц. сетями */}
          <div className="w-full sm:w-6/12 px-4">
            <h4 className="text-2xl sm:text-3xl font-semibold">
              <span className="primary-tx-blue-whiter">Tigris</span> Health
            </h4>
            <h5 className="text-sm sm:text-md mt-1 sm:mt-0 mb-3 sm:mb-2 text-blueGray-600">
              Tigris Health is a medical tourism company that provides services to patients worldwide.
            </h5>
            <div className="mt-4 sm:mt-6 flex justify-center sm:justify-start space-x-2">
              {socialLinks.map((link, index) => (
                <button
                  key={index}
                  className={`bg-white shadow-lg h-9 sm:h-10 w-9 sm:w-10 flex items-center justify-center rounded-full outline-none focus:outline-none ${link.color}`}
                >
                  {link.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Блок с ссылками */}
          <div className="w-full sm:w-1/2 px-4 mt-6 sm:mt-0 flex justify-center sm:justify-end">
            <div className="flex flex-wrap items-top mb-4 sm:mb-6 w-full sm:w-auto">
              {[usefulLinks, otherResources, sourceLinks].map((links, index) => (
                <div key={index} className="w-1/2 sm:w-4/12 px-4 mb-4 sm:mb-0 text-center sm:text-left">
                  <span className="block uppercase text-blueGray-500 text-xs sm:text-sm font-semibold mb-2">
                    {index === 0 ? "Useful Links" : index === 1 ? "Other Resources" : "Source Code"}
                  </span>
                  <ul>
                    {links.map((link, idx) => (
                      <li key={idx}>
                        <Link
                          className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-1 sm:pb-2 text-xs sm:text-sm"
                          to={link.url}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="my-4 sm:my-6 border-blueGray-300" />
        <div className="text-center text-xs sm:text-sm text-gray-800 font-semibold py-1">
          Copyright © {new Date().getFullYear()} Tigris Health by{" "}
          <a href="#" className="hover:text-blueGray-800">
            Tigris Group
          </a>
          .
        </div>
      </div>
    </footer>
  );
};
