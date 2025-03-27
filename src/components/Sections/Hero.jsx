import { Link } from "react-router-dom";
import video2 from "../../assets/tigris_intro_video2.mp4";
import { useTranslation } from "react-i18next";

import { HTTP_ROUTE } from "../../data";

const HeroSection = () => {
  const { t } = useTranslation();
  const video1 = "/assets/video/hero.mp4";

  return (
    <div className="flex flex-col items-center lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        {t("welcomeMessage")}{" "}
        <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          {t("companyName")}
        </span>
      </h1>
      <p className="text-lg sm:text-xl text-center mt-4 text-neutral-600">
        {t("companyDescription")}
      </p>
      <div className="flex mt-10 justify-center">
        <Link to={HTTP_ROUTE.website1.path} className="w-1/2 mx-2 my-4">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg border border-blue-200 shadow-sm shadow-blue-50 w-full"
          >
            <source src={video1} type="video/mp4" />
            {t("videoSupportMessage")}
          </video>
        </Link>
        <Link to={HTTP_ROUTE.website2.path} className="w-1/2 mx-2 my-4">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg border border-blue-200 shadow-sm shadow-blue-50 w-full"
          >
            <source src={video2} type="video/mp4" />
            {t("videoSupportMessage")}
          </video>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
