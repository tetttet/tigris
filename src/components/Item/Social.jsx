import { AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { FaWhatsapp, FaEnvelope, FaTimes, FaRobot } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

const iconSize = "25px";

const socialLinks = [
    { name: "", href: "", bgColor: "bg-blue-600", icon: <AiFillPhone size={iconSize} /> },
    { name: "", href: "", bgColor: "bg-green-500", icon: <FaWhatsapp size={iconSize} /> },
    { name: "", href: "", bgColor: "bg-pink-500", icon: <AiFillInstagram size={iconSize} /> },
    { name: "", href: "mailto:", bgColor: "bg-gray-600", icon: <FaEnvelope size={iconSize} /> },
];

const Social = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed right-5 sm:right-9 z-50 bottom-20 sm:bottom-10">
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="primary-button text-white p-2 sm:p-3 rounded-full shadow-lg flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12"
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
            >
                {isOpen ? <FaTimes size={22} sm:size={25} /> : <FaRobot size={22} sm:size={25} />}
            </motion.button>
            {isOpen && (
                <motion.div
                    className="absolute right-0 flex flex-col items-end gap-2 bottom-14 sm:bottom-16"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                >
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className={`flex items-center gap-2 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-lg ${link.bgColor} text-sm sm:text-base`}
                        >
                            {link.icon}
                            {link.name}
                        </a>
                    ))}
                </motion.div>
            )}
        </div>
    );

};

export default Social;
