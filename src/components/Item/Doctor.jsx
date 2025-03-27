import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaArrowLeft } from "react-icons/fa";
import Breadcrumb from "./../elements/Breadcrumb.jsx";
import Line from "./../ui/Line.jsx";
import MedNavbar from "../Navbar/MedNavbar.jsx";

const Doctor = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { t } = useTranslation("tigris.web.page");

    const post = location.state?.post;

    if (!post) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-xl text-gray-600">{t("error.notfound")}</p>
            </div>
        );
    }

    return (
        <div>
            <MedNavbar />
            <Breadcrumb title={post.title} />
            <div className="bg-gray-50">
                <div className="py-10 px-4 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-black">{post.title}</h2>
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center text-blue-600 hover:underline mb-5"
                    >
                        <FaArrowLeft className="mr-2" /> {t("back")}
                    </button>

                    <div className="overflow-hidden">
                        <img className="w-full h-96 object-cover rounded-lg" src={post.image_url} alt={post.title} />
                        <div className="p-6">
                            <h2 className="text-3xl font-bold text-gray-900">{post.title}</h2>
                            <p className="text-gray-500 mt-2">{post.date}</p>
                            <p className="mt-4 text-gray-700 whitespace-pre-line">{post.description}</p>
                        </div>
                    </div>
                </div>
                <Line borderColor="border-gray-500" />
            </div>
        </div>
    );
};

export default Doctor;
