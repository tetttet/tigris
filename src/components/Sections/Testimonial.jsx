import { Link } from "react-router-dom";
import img from "../../assets/features/bg.jpg";
import { useTranslation } from "react-i18next";
import { HTTP_ROUTE_MED_SERVICES } from "../../data";


const Testimonial = () => {
    const { t } = useTranslation("tigris.web.page");
    const testimonials = [
        {
            title: t("testimonial.list.title1"),
            description: t("testimonial.list.desc1"),
        },
        {
            title: t("testimonial.list.title2"),
            description: t("testimonial.list.desc2"),
        },
        {
            title: t("testimonial.list.title3"),
            description: t("testimonial.list.desc3"),
        }
    ];
    return (
        <div className="relative overflow-hidden bg-white ">
            <div aria-hidden="true" className="absolute inset-0">
                <div className="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8">
                    <img
                        src={img}
                        alt="Decorative Background"
                        className="h-full w-full object-cover object-center rounded-4xl"
                    />
                </div>
                <div className="absolute inset-0 bg-opacity-75"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white"></div>
            </div>

            <section aria-labelledby="sale-heading" className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <h2 id="sale-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        {t("testimonial.service")}    
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
                        {t("testimonial.desc")}
                    </p>
                    <Link to={HTTP_ROUTE_MED_SERVICES} className="mt-6 inline-block w-full rounded-md border border-transparent bg-gray-800 px-8 py-3 font-medium text-white hover:bg-cyan-800 sm:w-auto">
                        {t("getmoreinfo")}
                    </Link>
                </div>
            </section>

            <section aria-labelledby="testimonial-heading" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <h2 id="testimonial-heading" className="text-2xl font-bold tracking-tight primary-text-blue">
                        {t("testimonial.title")}
                    </h2>

                    <div className="mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
                        {testimonials.map((testimonial, index) => (
                            <blockquote key={index} className="sm:flex lg:block">
                                <svg width="24" height="18" viewBox="0 0 24 18" aria-hidden="true" className="flex-shrink-0 text-gray-300">
                                    <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
                                </svg>
                                <div className="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
                                    <cite className="block font-bold not-italic text-gray-900">
                                        {testimonial.title}
                                    </cite>
                                    <p className="text-lg mt-4 text-gray-600">
                                        {testimonial.description}
                                    </p>
                                </div>
                            </blockquote>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonial;
