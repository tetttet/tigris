import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";


import img1 from '../../assets/about/img1.jpg'
import img2 from '../../assets/about/img2.jpg'
import img3 from '../../assets/about/img3.jpg'



const Item = () => {
    const { t } = useTranslation("tigris.web.page");
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 3;
    const navigate = useNavigate();

    const examplePosts = [
        {
            id: 1,
            title: t("about.abouttitle"),
            description: t("about.aboutus"),
            image_url: img1,
            date: ""
        },
        {
            id: 2,
            title: t("about.missiontitle"),
            description: t("about.mission"),
            image_url: img2,
            date: ""
        },
        {
            id: 3,
            title: t("about.servicestitle"),
            description: t("about.services"),
            image_url: img3,
            date: ""
        }
    ];

    const totalPages = Math.ceil(examplePosts.length / postsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const currentPosts = examplePosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

    const handlePostClick = (post) => {
        navigate(`/doctors/${post.title}`, { state: { post } });
    };

    return (
        <div>
            <section className="py-10 bg-gray-50">
                <div className="px-4 mt-14 mx-auto max-w-7xl">
                    <h2 className="text-3xl font-bold text-center text-black">{t("about.abouttitle")}</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base text-center text-gray-600"></p>

                    <div className="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-3">
                        {currentPosts.map((post) => (
                            <div
                                key={post.id}
                                className="overflow-hidden bg-white rounded shadow flex flex-col cursor-pointer"
                                onClick={() => handlePostClick(post)}
                            >
                                <div className="relative">
                                    <img className="object-cover w-full h-96 bg-gray-800" src={post.image_url} alt={post.title} />
                                </div>
                                <div className="p-5 flex flex-col flex-grow">
                                    <span className="text-sm text-gray-500">{post.date}</span>
                                    <p className="mt-5 text-2xl font-semibold">{post.title}</p>
                                    <p className="mt-4 text-base whitespace-pre-line text-gray-600 flex-grow">{post.description}</p>
                                    <Link to="#" className="text-blue-600 mt-5 hover:underline">
                                        {t("readmore")}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-center mt-8 space-x-3">
                        <button onClick={handlePrev} className="text-gray-400 w-12 h-12 bg-transparent border border-gray-300 rounded hover:bg-blue-500 hover:text-white flex items-center justify-center">
                            <FaAngleLeft className="w-6 h-6" />
                        </button>

                        <button onClick={handleNext} className="text-gray-400 w-12 h-12 bg-transparent border border-gray-300 rounded hover:bg-blue-500 hover:text-white flex items-center justify-center">
                            <FaAngleRight className="w-6 h-6" />
                        </button>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Item;
