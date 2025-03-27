import { useTranslation } from "react-i18next";
import img from "../../assets/about/about.jpg";

const Intro = () => {
    const { t } = useTranslation("tigris.web.page");

    return (
        <div className="w-full mt-20 lg:mb-20 container mx-auto">
            <div className="flex flex-col lg:flex-row bg-white" style={{ height: '600px', position: 'relative' }}>
                <div className="w-full mb-10 lg:hidden" style={{ height: '50%' }}>
                    <div className="h-full relative">
                        <img
                            src={img}
                            alt="Intro"
                            className="h-full object-cover w-full"
                            style={{ objectPosition: 'center' }}
                        />
                        <div className="h-full bg-black opacity-50 absolute inset-0"></div>
                    </div>
                </div>

                <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2 z-10">
                    <div>
                        <h2 className="text-2xl mb-10 font-semibold text-gray-800 md:text-2xl"><span className="text-blue-600">{t("intro.logo")}</span>{t("intro.logotext")}</h2>
                        <p className="mt-2 text-sm text-gray-500 md:text-base">
                            {t("intro.text1")}
                        </p>
                        <p className="mt-2 text-sm text-gray-500 md:text-base">
                            {t("intro.text2")}
                        </p>
                    </div>
                </div>

                <div className="hidden lg:block lg:w-1/2" style={{ clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0 100%)' }}>
                    <div className="h-full relative">
                        <img
                            src={img}
                            alt="Intro"
                            className="h-full object-cover w-full"
                            style={{ objectPosition: 'left center' }}
                        />
                        <div className="h-full bg-black opacity-25 absolute inset-0"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;
