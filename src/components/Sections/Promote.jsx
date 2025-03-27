import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Promote = () => {
    const { t } = useTranslation("tigris.web.page");
    
    const service = "/assets/block/service.jpg";
    const event = "/assets/block/event.jpg";
    const corporate = "/assets/block/corporate.jpg";

    return (
        <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-gray-200 mb-10">
            <div className="flex flex-col md:flex-row items-start space-x-4">
                <img
                    src={event}
                    alt="Turkish Airlines Holidays"
                    className="w-44 h-44 object-cover rounded-lg mb-5"
                />
                <div>
                    <h3 className="font-bold text-lg">{t("promote.title1")}</h3>
                    <p className="text-gray-600 text-sm mt-1">
                        {t("promote.desc1")}
                    </p>
                    <Link href="#" className="primary-text-blue font-semibold mt-2 inline-block">
                        {t("exploremore")}
                    </Link>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-start space-x-4">
                <img
                    src={corporate}
                    alt="TK Cüzdan"
                    className="w-44 h-44 object-cover rounded-lg mb-5"
                />
                <div>
                    <h3 className="font-bold text-lg">{t("promote.title2")}</h3>
                    <p className="text-gray-600 text-sm mt-1">
                        {t("promote.desc2_1")}
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                        {t("promote.desc2_2")}
                    </p>
                    <Link href="#" className="primary-text-blue font-semibold mt-2 inline-block">
                        {t("learnmore")}
                    </Link>
                </div>
            </div>

            <div className="ml-52 hidden sm:block col-span-1 md:col-span-2 bg-white rounded-lg p-6 flex-col md:flex-row items-start">
                <img
                    src={service}
                    alt="Hediye Kart"
                    className="w-96 h-56 object-cover rounded-lg"
                />
                <div className="ml-4 mt-5">
                    <h3 className="font-bold text-lg flex items-center">
                        <span className="w-2 h-2 primary-bg-blue rounded-full inline-block mr-2"></span>
                        {t("promote.title3")}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                        <span className="primary-text-blue font-bold">{t("promote.desc3_1")}</span> {t("promote.desc3_2")}
                    </p>
                    <Link href="#" className="primary-text-blue font-semibold mt-2 inline-block">
                        {t("getyournow")}
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default Promote