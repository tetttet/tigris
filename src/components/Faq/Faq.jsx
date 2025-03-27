import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";
import { useTranslation } from 'react-i18next';


const Questions = () => {
    const { t } = useTranslation("tigris.web.page");
    const questionsData = [
        {
            question: t("faq.questionsData.q1"),
            answer: t("faq.questionsData.a1")
        },
        {
            question: t("faq.questionsData.q2"),
            answer: t("faq.questionsData.a2")
        },
        {
            question: t("faq.questionsData.q3"),
            answer: t("faq.questionsData.a3")
        },
        {
            question: t("faq.questionsData.q4"),
            answer: t("faq.questionsData.a4")
        },
        {
            question: t("faq.questionsData.q5"),
            answer: t("faq.questionsData.a5")
        },
        {
            question: t("faq.questionsData.q6"),
            answer: t("faq.questionsData.a6")
        }
    ];
    const [openIndex, setOpenIndex] = useState(null);

    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <section className="py-10 sm:py-16">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold primary-text-blue leading-tight  sm:text-4xl lg:text-4xl">
                            {t("faq.question")}
                        </h2>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
                            {t("faq.desc")}
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                        {questionsData.map((item, index) => (
                            <div key={index} className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                                <button
                                    type="button"
                                    className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                                    onClick={() => toggleOpen(index)}
                                >
                                    <span className="flex text-lg font-semibold text-black">{item.question}</span>
                                    <FaAngleDown className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                                </button>
                                {openIndex === index && (
                                    <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                                        <p>{item.answer}</p>
                                        <Link to="#" className="text-blue-600 mt-3 transition-all duration-200 hover:underline">
                                            {t("learnmore")}
                                        </Link>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-gray-600 text-base mt-9">
                        {t("faq.title")}{' '}
                        <Link to="#" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">
                            {t("gettouch.contactus")}
                        </Link>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Questions;
