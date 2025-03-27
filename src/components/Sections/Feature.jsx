import { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import { FaAmbulance, FaCapsules, FaStethoscope } from 'react-icons/fa';
import { X } from "lucide-react";

import img from "../../assets/about/features.jpg"
import img1 from "../../assets/slider/slider1.jpg";
import img2 from "../../assets/slider/slider2.jpg";
import img3 from "../../assets/slider/slider3.jpg";
import img4 from "../../assets/hero/hero5.jpg";
import { useTranslation } from "react-i18next";

export const Feature = () => {
    const { t } = useTranslation("tigris.web.page");
    const agency = "/assets/block/agency.jpg";
    return (
        <div className="bg-gray-50">
            <div className="max-w-screen-2xl mx-auto md:px-16">
                <div className="lg:flex items-center gap-x-12">
                    <div className=" ml-15 mr-48">
                        <img src={agency} className="hidden lg:block md:max-w-md sm:rounded-lg" alt="" />
                    </div>
                    <div className="max-w-xl px-4 mt-6 sm:px-0 lg:max-w-2xl">
                        <h3 className="primary-text-blue font-semibold text-2xl">
                            {t("feature.title1")}
                        </h3>
                        <p className="text-gray-800 text-2xl font-semibold sm:text-3xl">
                            {t("feature.title2")}
                        </p>
                        <p className="mt-3 text-gray-600">
                            {t("feature.desc1")}
                        </p>
                        <br />
                        <h3 className="primary-text-blue font-semibold text-2xl">
                            {t("feature.title3")}
                        </h3>
                        <p className="mt-3 text-gray-600">
                            {t("feature.desc2")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const FeaturesSection = () => {
    return (
        <section className="features py-16 primary-bg-blue-whiter">
            <div className="container mx-auto px-4">
                <div className="section-title text-center mb-12">
                    <h2 className="text-3xl text-amber-50 font-semibold mb-4">We Are Always Ready to Help You & Your Family</h2>
                    <p className="text-lg text-white">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. Pretiumts
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Emergency Help */}
                    <div className="single-feature bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
                        <div className="icon text-4xl text-primary mb-4">
                            <FaAmbulance />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Emergency Help</h3>
                        <p className="text-gray-600">
                            Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.
                        </p>
                    </div>

                    {/* Enriched Pharmacy */}
                    <div className="single-feature bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
                        <div className="icon text-4xl text-primary mb-4">
                            <FaCapsules />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Enriched Pharmacy</h3>
                        <p className="text-gray-600">
                            Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.
                        </p>
                    </div>

                    {/* Medical Treatment */}
                    <div className="single-feature bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
                        <div className="icon text-4xl text-primary mb-4">
                            <FaStethoscope />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Medical Treatment</h3>
                        <p className="text-gray-600">
                            Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const PortfolioSection = () => {
    const portfolioItems = [
        { id: 1, imgSrc: img2, link: "portfolio-details.html" },
        { id: 2, imgSrc: img1, link: "portfolio-details.html" },
        { id: 3, imgSrc: img2, link: "portfolio-details.html" },
        { id: 4, imgSrc: img3, link: "portfolio-details.html" },
        { id: 5, imgSrc: img1, link: "portfolio-details.html" },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div className="row w-full overflow-hidden">
            <div className="col-lg-12 col-12">
                <Slider {...settings}>
                    {portfolioItems.map(item => (
                        <div key={item.id} className="single-pf px-4">
                            <img src={item.imgSrc} alt={`portfolio-item-${item.id}`} className="w-full rounded-lg shadow-md" />
                        </div>
                    ))}
                </Slider>

            </div>
        </div>
    );
};

export const Banner = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <section className="w-full border-b bg-white px-4 py-3 shadow-sm">
            <div className="flex items-center justify-between gap-2">
                <div className="flex-1 text-center">
                    <span className="text-sm">
                        <span className="font-medium">Tigris Group for health website platform!</span>{" "}
                        <span className="text-muted-foreground">
                            Check out all the{" "}
                            <a
                                href="#"
                                className="underline underline-offset-4 hover:text-foreground"
                                target="_blank"
                            >
                                new features
                            </a>
                            .
                        </span>
                    </span>
                </div>

                <button
                    size="icon"
                    className="-mr-2 h-8 w-8 flex-none"
                    onClick={handleClose}
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
        </section>
    );
};

export const BannerSection = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <section className="w-full border-b bg-white px-4 py-3 shadow-sm">
            <div className="flex items-center justify-between gap-2">
                <div className="flex-1 text-center">
                    <span className="text-sm">
                        <span className="font-medium">Tigris Group use Cookies!</span>{" "}
                        <span className="text-muted-foreground">
                            Check out all the{" "}
                            <a
                                href="#"
                                className="underline underline-offset-4 hover:text-foreground"
                                target="_blank"
                            >
                                our policy
                            </a>
                            .
                        </span>
                    </span>
                </div>

                <button
                    size="icon"
                    className="-mr-2 h-8 w-8 flex-none"
                    onClick={handleClose}
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
        </section>
    );
};

export const CastIronInfo = () => {
    return (
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-6 gap-6">
            <div className="md:w-2/3 space-y-4">
                <h1 className="text-3xl font-bold">
                    Tigris Group - это профессиональные услуги
                </h1>
                <p>
                    At Tigris, our mission is to empower individuals and organizations by providing top-tier educational experiences that drive success. We strive to bridge the gap between theoretical knowledge and practical application, ensuring that our users gain real-world skills that translate into meaningful career and personal development.
                </p>
                <p>
                    We believe that knowledge should be accessible, engaging, and tailored to real-world applications. That’s why we continuously innovate to bring you the best tools and content to facilitate your learning and growth.
                </p>
                <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
                        Delivering high-quality, industry-relevant courses
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
                        Creating an interactive and engaging learning environment
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
                        Supporting lifelong learning and career advancement
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
                        Utilizing advanced technology to enhance education
                    </li>
                </ul>
                <img
                    src={img4}
                    alt=""
                    className="w-full rounded-lg shadow-md"
                />
            </div>

            {/* Правая часть для текста */}
            <div className="md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold">Дополнительная информация</h2>
                <p className="mt-2 text-gray-700">

                </p>
                <p className="mt-2 text-gray-700">
                    Tigris is a forward-thinking company dedicated to revolutionizing the way individuals and businesses access high-quality educational resources and professional development opportunities. Our platform is built with cutting-edge technology to provide seamless and immersive learning experiences. Whether you are looking to upskill, explore new fields, or enhance your workforce’s capabilities, Tigris is your trusted partner on this journey.
                </p>
            </div>
        </div>
    );
}

export const Clients = () => {
    return (
        <section className="my-20 mt-20 bg-gray-50">
            <div className="container mx-auto px-4"> <div className="flex flex-wrap items-center mt-32">
                <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                    <h3 className="text-3xl mb-2 font-semibold leading-normal">
                        Working with us is a pleasure
                    </h3>
                    <p className="text-gray-600 text-lg font-light leading-relaxed mt-4 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
                        condimentum quam. Fusce sed est eu felis tincidunt rhoncus. Nullam in
                        magna sit amet lectus aliquet dapibus. Cras suscipit, neque nec
                        condimentum auctor.
                    </p>
                    <p className="text-gray-600 text-lg font-light leading-relaxed mt-0 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
                        condimentum quam. Fusce sed est eu felis tincidunt rhoncus. Nullam in
                        magna sit amet lectus aliquet dapibus. Cras suscipit, neque nec
                        condimentum auctor. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Duis nec condimentum quam. Fusce sed est eu felis tincidunt
                        rhoncus. Nullam in magna sit amet lectus aliquet dapibus. Cras suscipit,
                        neque nec condimentum auctor.
                    </p>
                    <Link to="/" className="font-bold text-blueGray-700 mt-8">
                        Check out our work
                    </Link>
                </div>

                <div className="w-full md:w-4/12 px-4 mr-auto ml-auto pt-7">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 ">
                        <img
                            alt="..."
                            src={img}
                            className="w-full align-middle rounded-3xl"
                        />
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export const ContactSection = () => {
    const { t } = useTranslation("tigris.web.page");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(!isModalOpen);
    const closeModalOnClickOutside = (e) => {
        if (e.target === e.currentTarget) {
            setIsModalOpen(false);
        }
    };

    const locations = [
        {
            title: t("gettouch.location.title1"),
            address: t("gettouch.location.desc1"),
            image: "/assets/block/contact1.jpg",
        },
        {
            title: t("gettouch.location.title2"),
            address: t("gettouch.location.desc2"),
            image: "/assets/block/contact2.jpg",
        },
        {
            title: t("gettouch.location.title3"),
            address: t("gettouch.location.desc3"),
            image: "/assets/block/contact3.jpg",
        },
        {
            title: t("gettouch.location.title4"),
            address: t("gettouch.location.desc4"),
            image: "/assets/block/contact4.jpg",
        },
    ];

    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="md:flex gap-x-24 clear-left md:mb-16 mb-10">
                    <div className="md:mb-0 mb-4">
                        <h2 className="text-black font-manrope text-4xl font-semibold leading-10 mb-5 md:text-left text-center">
                            {t("gettouch.title")}
                        </h2>
                        <p className="text-gray-600 text-lg font-normal leading-7 mb-7 md:text-left text-center">
                            {t("gettouch.desc")}
                        </p>
                        <div className="flex md:items-center md:justify-start justify-center">
                            <button
                                onClick={toggleModal}
                                className="w-36 h-12 rounded-lg primary-bg-blue-header transition-all duration-700 hover:bg-indigo-800 shadow text-white text-center text-base font-semibold leading-6"
                            >
                                {t("gettouch.contactus")}
                            </button>
                        </div>
                    </div>
                    <div className="border-l-2 md:border-blue-600 border-white px-10 py-6">
                        <div className="mb-8">
                            <h6 className="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center">
                                {t("gettouch.email")}
                            </h6>
                            <h3 className="text-black text-xl font-semibold leading-8 md:text-start text-center">
                                pagedone@gmail.com
                            </h3>
                        </div>
                        <div>
                            <h6 className="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center">
                                {t("gettouch.phone")}
                            </h6>
                            <h3 className="text-black text-xl font-semibold leading-8 md:text-start text-center">
                                470-601-1911
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
                    {locations.map((location, index) => (
                        <div key={index} className="h-96 relative flex justify-center">
                            <div className="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50"></div>
                            <img
                                src={location.image}
                                alt={`${location.title} image`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 mb-6 text-center px-6">
                                <h5 className="text-white text-lg font-semibold leading-7 mb-2">{location.title}</h5>
                                <p className="text-white text-base font-medium leading-6">{location.address}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <div
                    onClick={closeModalOnClickOutside}
                    className="fixed inset-0 transparent-background flex justify-center items-center z-50"
                >
                    <div
                        className="bg-white p-8 rounded-lg w-96 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 className="text-xl font-semibold text-center mb-4">
                            {t("gettouch.contactus")}
                        </h3>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    {t("gettouch.modal.firstname")}
                                </label>
                                <input type="text" className="w-full px-4 py-2 border rounded-md border-gray-400" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    {t("gettouch.modal.lastname")}
                                </label>
                                <input type="text" className="w-full px-4 py-2 border rounded-md border-gray-400" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    {t("gettouch.modal.email")}
                                </label>
                                <input type="email" className="w-full px-4 py-2 border rounded-md border-gray-400" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    {t("gettouch.modal.phone")}
                                </label>
                                <input type="text" className="w-full px-4 py-2 border rounded-md border-gray-400" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    {t("gettouch.modal.message")}
                                </label>
                                <textarea className="w-full px-4 py-2 border rounded-md border-gray-400" rows="4"></textarea>
                            </div>
                            <div className="flex justify-center">
                                <button type="submit" className="w-full py-2 primary-bg-blue-header text-white rounded-md hover:bg-indigo-700">
                                    {t("gettouch.modal.send")}
                                </button>
                            </div>
                        </form>
                        <button
                            onClick={toggleModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export const PortSection = () => {
    const { t } = useTranslation("tigris.web.page");
    const items = [
        {
            image: '/assets/block/gallery1.jpg',
            title: t("port.items.title1"),
            description: t("port.items.desc1"),
            bgPosition: 'end',
            isMainImage: true,
        },
        {
            image: '/assets/block/gallery2.jpg',
            title: '',
            description: '',
            isMainImage: false,
        },
        {
            image: '/assets/block/gallery5.jpg',
            title: '',
            description: '',
            isMainImage: false,
        },
        {
            image: '/assets/block/gallery4.jpg',
            title: '',
            description: '',
            isMainImage: false,
        },
        {
            image: '/assets/block/gallery6.jpg',
            title: t("port.items.title2"),
            description: t("port.items.desc2"),
            bgPosition: 'start',
            isMainImage: true,
        },
        {
            image: '/assets/block/gallery3.jpg',
            title: '',
            description: '',
            isMainImage: false,
        },
        {
            image: '/assets/block/gallery9.jpg',
            title: t("port.items.title3"),
            description: t("port.items.desc3"),
            bgPosition: 'end',
            isMainImage: true,
        },
        {
            image: '/assets/block/gallery8.jpg',
            title: t("port.items.title4"),
            description: t("port.items.desc4"),
            bgPosition: 'end',
            isMainImage: true,
        },
    ];

    return (
        <section className="mb-20 relative">
            <div className="w-full max-w-7xl px-6 lg:px-8 mx-auto">
                <div className="flex items-center justify-center flex-col gap-5 mb-14">
                    <span className="bg-indigo-50 primary-text-blue text-xs font-medium px-3.5 py-1 rounded-full">
                        {t("port.title")}
                    </span>
                    <h2 className="font-manrope font-bold text-4xl text-gray-900 text-center">
                        <span className="primary-text-blue">{t("tigris")}</span>{t("port.subtitle")}
                    </h2>
                    <p className="text-lg font-normal text-gray-500 max-w-3xl mx-auto text-center">
                        {t("port.desc")}
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-14">
                    {items.map((item, index) => (
                        item.isMainImage ? (
                            <div
                                key={index}
                                className={`sm:col-span-2 bg-cover bg-center max-md:h-80 rounded-lg flex justify-${item.bgPosition} flex-col px-7 py-6`}
                                style={{ backgroundImage: `url(${item.image})` }}
                            >
                                <h6 className="font-semibold text-xl leading-8 text-white mb-4">{item.title}</h6>
                                <p className="text-base font-normal text-white/70">{item.description}</p>
                            </div>
                        ) : (
                            <div key={index} className="block">
                                <img
                                    src={item.image}
                                    alt="Building structure image"
                                    className="w-full rounded-lg object-cover"
                                />
                            </div>
                        )
                    ))}
                </div>
            </div>
        </section>
    );
};

export const Gallery = () => {
    const data = [
        {
            cover: "/assets/company/tursab.png",
        },
        {
            cover: "/assets/company/nternational accreditation service.png",
        },
        {
            cover: "/assets/company/international organization for standardization.png",
        },
        {
            cover: "/assets/company/international forum on accreditation.png",
        },
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
    };
    return (
        <div>
            <section className="collection">
                <div className="max-w-[50%] m-auto mx-auto py-8">
                    <Slider {...settings}>
                        {data.map((value, index) => {
                            return (
                                <div key={index} className="p-4">
                                    <img
                                        src={value.cover}
                                        alt=""
                                        className="grayscale transition duration-500 ease-in-out hover:grayscale-0"
                                    />
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </section>
        </div>
    );
};



