import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../../assets/tigrisgrouplogo.jpeg";
import { AnimatePresence, motion } from "framer-motion";
import { Faq, Doctors, About, Contact, Services, Home } from "../../hooks/header.hooks";
import {
    FiChevronDown,
} from "react-icons/fi";
import Topbar from "../Sections/Topbar";
import { FaGlobe } from 'react-icons/fa'; // You can use any other icon you like
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
    HTTP_ROUTE_MED_ABOUT,
    HTTP_ROUTE_MED_CONTACT,
    HTTP_ROUTE_MED_DOCTORS,
    HTTP_ROUTE_MED_FAQ,
    HTTP_ROUTE_MED_HOME,
    HTTP_ROUTE_MED_SERVICES
} from "./../../data.js";

const lang = [
    { code: 'en', label: 'English', icon: '🇬🇧' },
    { code: 'ru', label: 'Russian', icon: '🇷🇺' },
    { code: 'kz', label: 'Kazakh', icon: '🇰🇿' },
    { code: 'fr', label: 'French', icon: '🇫🇷' },
    { code: 'tr', label: 'Turkish', icon: '🇹🇷' },
];


const Navbar = () => {

    const navItems = [
        { to: HTTP_ROUTE_MED_ABOUT, label: "About" },
        { to: HTTP_ROUTE_MED_DOCTORS, label: "Doctors" },
        { to: HTTP_ROUTE_MED_CONTACT, label: "Contact" },
        { to: HTTP_ROUTE_MED_FAQ, label: "FAQ" },
    ];

    const TABS = [
        {
            title: "Home",
            Component: Home,
            Link: HTTP_ROUTE_MED_HOME,
        },
        {
            title: "About",
            Component: About,
            Link: HTTP_ROUTE_MED_ABOUT,
        },
        {
            title: "Doctors",
            Component: Doctors,
            Link: HTTP_ROUTE_MED_DOCTORS,
        },
        {
            title: "Contact",
            Component: Contact,
            Link: HTTP_ROUTE_MED_CONTACT,
        },
        {
            title: "Services",
            Component: Services,
            Link: HTTP_ROUTE_MED_SERVICES,
        },
        {
            title: "FAQ",
            Component: Faq,
            Link: HTTP_ROUTE_MED_FAQ,
        }
    ].map((n, idx) => ({ ...n, id: idx + 1 }));

    const { i18n } = useTranslation();
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const [dir, setDir] = useState(null);
    const [selectedLang, setSelectedLang] = useState(lang[0].code);

    const handleSetSelected = (val) => {
        if (typeof selected === "number" && typeof val === "number") {
            setDir(selected > val ? "r" : "l");
        } else if (val === null) {
            setDir(null);
        }
        setSelected(val);
    };

    const handleLanguageChange = (e) => {
        setSelectedLang(e.target.value);
        i18n.changeLanguage(e.target.value);
        console.log(`Selected language: ${e.target.value}`);
    };

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <>
            <div className="bg-gradient-to-r from-gray-100 to-gray-50">
                <Topbar />
            </div>
            <nav className="border border-gray-300 bg-white sticky top-0 z-50 py-3 backdrop-blur-lg border-b ">
                <div className="container px-4 mx-auto relative lg:text-sm">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center flex-shrink-0">
                            <Link to="/">
                                <img className="w-52 h-14 mr-2" src={logo} alt="Logo" />
                            </Link>
                        </div>
                        <div onMouseLeave={() => handleSetSelected(null)} className="relative h-fit gap-2 hidden lg:flex">
                            {TABS.map((t) => {
                                return (
                                    <Link to={t.Link} key={t.id}>
                                        <Tab
                                            key={t.id}
                                            selected={selected}
                                            handleSetSelected={handleSetSelected}
                                            tab={t.id}
                                        >
                                            {t.title}
                                        </Tab>
                                    </Link>
                                );
                            })}

                            <AnimatePresence>
                                {selected && <Content dir={dir} selected={selected} TABS={TABS} />}
                            </AnimatePresence>
                        </div>
                        <div className="hidden lg:flex justify-center items-center p-1 rounded-lg">
                            <div className="flex items-center">
                                <FaGlobe className="mr-3" />
                                <select
                                    onChange={handleLanguageChange}
                                    value={selectedLang}
                                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                                >
                                    {lang.map((language) => (
                                        <option key={language.code} value={language.code}>
                                            {language.icon}{" "}{language.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="lg:hidden md:flex flex-col justify-end">
                            <button onClick={toggleNavbar}>
                                {mobileDrawerOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>
                    {mobileDrawerOpen && (
                        <div className="fixed right-0 z-20 bg-white text-black w-full p-12 flex flex-col justify-center items-center lg:hidden">
                            <ul className="w-full">
                                {navItems.map((item, index) => (
                                    <li key={index} className="py-4 border-b border-gray-300">
                                        <Link to={item.to} className="w-full text-center">{item.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};


const Tab = ({ children, tab, handleSetSelected, selected }) => {
    return (
        <button
            id={`shift-tab-${tab}`}
            onMouseEnter={() => handleSetSelected(tab)}
            onClick={() => handleSetSelected(tab)}
            className={`flex items-center gap-1 px-3 py-1.5 text-sm transition-colors `}
        >
            <span>{children}</span>
            <FiChevronDown
                className={`transition-transform ${selected === tab ? "rotate-180" : ""
                    }`}
            />
        </button>
    );
};

const Content = ({ selected, dir, TABS }) => {
    return (
        <motion.div
            id="overlay-content"
            initial={{
                opacity: 0,
                y: 8,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            exit={{
                opacity: 0,
                y: 8,
            }}
            className="absolute left-0 top-[calc(100%_+_24px)] rounded-lg border border-neutral-300 bg-white "
        >
            <Bridge />
            <Nub selected={selected} />

            {TABS.map((t) => {
                return (
                    <div className="overflow-hidden" key={t.id}>
                        {selected === t.id && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                                }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                            >
                                <t.Component />
                            </motion.div>
                        )}
                    </div>
                );
            })}
        </motion.div>
    );
};

const Bridge = () => (
    <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }) => {
    const [left, setLeft] = useState(0);

    useEffect(() => {
        moveNub();
    }, [selected]);

    const moveNub = () => {
        if (selected) {
            const hoveredTab = document.getElementById(`shift-tab-${selected}`);
            const overlayContent = document.getElementById("overlay-content");

            if (!hoveredTab || !overlayContent) return;

            const tabRect = hoveredTab.getBoundingClientRect();
            const { left: contentLeft } = overlayContent.getBoundingClientRect();

            const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

            setLeft(tabCenter);
        }
    };

    return (
        <motion.span
            style={{
                clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
            }}
            animate={{ left }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-none primary-bg-blue-whiter"
        />
    );
};


export default Navbar;
