import { Link } from "react-router-dom";
import { contactInfo, HTTP_ROUTE_MED_ABOUT, HTTP_ROUTE_MED_CONTACT, HTTP_ROUTE_MED_DOCTORS, HTTP_ROUTE_MED_FAQ, HTTP_ROUTE_MED_SERVICES } from "../../data";
import { useTranslation } from "react-i18next";

const Topbar = () => {
  const { t } = useTranslation("header");

  const LinksToPages = [
    { to: HTTP_ROUTE_MED_ABOUT, label: t("topbar.about") },
    { to: HTTP_ROUTE_MED_DOCTORS, label: t("topbar.doctors") },
    { to: HTTP_ROUTE_MED_SERVICES, label: t("topbar.services") },
    { to: HTTP_ROUTE_MED_CONTACT, label: t("topbar.contact") },
    { to: HTTP_ROUTE_MED_FAQ, label: t("topbar.fAQ") },
  ];

  return (
    <div className="text-black py-3 container mx-auto px-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:justify-between">
          <ul className="flex space-x-6 text-sm">
            {LinksToPages.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="hover:text-gray-400">{label}</Link>
              </li>
            ))}
          </ul>

          <ul className="flex space-x-6 text-sm">
            {contactInfo.map(({ subtext, link }, index) => (
              <li key={index} className="flex items-center">
                <a
                  href={link}
                  className="hover:text-gray-400"
                >
                  {link}
                </a>
                <Link to="/contact" className="hover:text-gray-800">
                  <span className="ml-5 font-bold">{subtext}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
