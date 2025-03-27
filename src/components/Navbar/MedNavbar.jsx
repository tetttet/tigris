import { NavLink } from "react-router-dom"
import logo from "../../assets/tigrisgrouplogo-removebg.png"
import { GoLocation } from "react-icons/go"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next";
import {
    HTTP_ROUTE,
    HTTP_ROUTE_TIGRIS_TARGET,
    HTTP_ROUTE_TIGRIS_MEET,
    HTTP_ROUTE_TIGRIS_MEDICAL,
    HTTP_ROUTE_TIGRIS_CONTACT,
    HTTP_ROUTE_TIGRIS_ABOUT
} from "../../data";
import Topbar from "../Sections/Topbar";

const lang = [
    { code: 'en', label: 'English', icon: '🇬🇧' },
    { code: 'ru', label: 'Russian', icon: '🇷🇺' },
    { code: 'kz', label: 'Kazakh', icon: '🇰🇿' },
    { code: 'fr', label: 'French', icon: '🇫🇷' },
    { code: 'tr', label: 'Turkish', icon: '🇹🇷' },
];

const MedNavbar = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation("header");
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024); // 1024px для десктопов
    const [selectedLang, setSelectedLang] = useState(lang[0].code);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuOpenS, setIsMenuOpenS] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navBar = [
        {
            id: 1,
            name_desk: t("navabar.tigristourism"),
            name_mob: t("navbar-mobile.tigristourism"),
            path: HTTP_ROUTE.website1.path,
        },
        {
            id: 2,
            name_desk: t("navabar.meetexpert"),
            name_mob: t("navbar-mobile.meetexpert"),
            path: HTTP_ROUTE_TIGRIS_MEET,
        },
        {
            id: 3,
            name_desk: t("navabar.targettourism"),
            name_mob: t("navbar-mobile.targettourism"),
            path: HTTP_ROUTE_TIGRIS_TARGET,
        },
        {
            id: 4,
            name_desk: t("navabar.tigrismedical"),
            name_mob: t("navbar-mobile.tigrismedical"),
            path: HTTP_ROUTE_TIGRIS_MEDICAL,
        },
        {
            id: 5,
            name_desk: t("navabar.about"),
            name_mob: t("navbar-mobile.about"),
            path: HTTP_ROUTE_TIGRIS_ABOUT,
        },
        {
            id: 6,
            name_desk: t("navabar.contact"),
            name_mob: t("navbar-mobile.contact"),
            path: HTTP_ROUTE_TIGRIS_CONTACT,
        },
    ];

    const handleLanguageChange = (e) => {
        setSelectedLang(e.target.value);
        i18n.changeLanguage(e.target.value);
        console.log(`Selected language: ${e.target.value}`);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <div className="bg-gradient-to-r from-gray-200 to-gray-50">
                <Topbar />
            </div>
            <header className='sticky top-0 z-50 h-auto bg-white border-b bottom-2 border-gray-50'>
                <div className='container px-4 mx-auto'>
                    <div className='flex justify-between items-center py-4'>
                        <div className='flex items-center gap-4'>
                            <div className='h-12 w-32'>
                                <NavLink to='/' className='logo-link'>
                                    <img src={logo} alt='logo' className='object-contain w-full h-full' />
                                </NavLink>
                            </div>

                            <div className='hidden md:block text-sm space-y-0.5'>
                                <p className='font-medium'>Email: <a href='mailto:info@example.com' className='text-primary hover:underline'>info@example.com</a></p>
                                <p>
                                    <a href='tel:+1234567890' className='text-primary hover:underline'>Call us: <span className='primary-text-blue font-semibold'>+1 234 567 890</span></a>
                                </p>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <select onChange={handleLanguageChange} value={selectedLang} className='border border-gray-300 p-2 rounded-md'>
                                {lang.map((language) => (
                                    <option key={language.code} value={language.code}>
                                        {language.label}
                                    </option>
                                ))}
                            </select>
                            <button className='ml-4 md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                ☰
                            </button>
                        </div>
                    </div>

                    {isMenuOpen && (
                        <div className='md:hidden text-center py-4 border-t'>
                            <p className='font-medium'>Email: <a href='mailto:info@example.com' className='text-primary hover:underline'>info@example.com</a></p>
                            <p>
                                <a href='tel:+1234567890' className='text-primary hover:underline'>Call us: <span className='primary-text-blue font-semibold'>+1 234 567 890</span></a>
                            </p>
                        </div>
                    )}
                </div>

                <nav className='primary-bg-blue-header primary-text-gray font-semibold border-t border-gray-200 p-3'>
                    <div className='containers flex justify-between items-center'>
                        <button className='md:hidden' onClick={() => setIsMenuOpenS(!isMenuOpenS)}>
                            ☰
                        </button>
                        <ul
                            className={`md:flex md:items-center md:justify-start ${isMenuOpenS ? 'block' : 'hidden'
                                } md:block space-y-4 md:space-y-0 flex flex-col md:flex-row text-center md:text-left gap-x-4`}
                        >
                            {navBar.map((item) => (
                                <li key={item.id}>
                                    <NavLink
                                        to={item.path}
                                        className="group uppercase text-[14px] font-medium primary-text-gray block">
                                        {isDesktop || !isMobile ? item.name_desk : item.name_mob}
                                        <span className="block w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <div className='location hidden md:flex items-center'>
                            <GoLocation size={20} />
                            <span className='text-sm ml-3'>Istanbul, Turkey</span>
                        </div>
                    </div>
                    {isMenuOpenS && (
                        <div className='md:hidden text-center py-3 border-t'>
                            <div className='location flex justify-center items-center'>
                                <GoLocation size={20} />
                                <span className='text-sm ml-3'>Istanbul, Turkey</span>
                            </div>
                        </div>
                    )}
                </nav>
            </header>
        </>
    )
}


export default MedNavbar
