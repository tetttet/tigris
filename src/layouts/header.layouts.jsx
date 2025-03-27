import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const ListItem = ({ item }) => (
    <div className="flex mb-4 text-gray-600 hover:text-gray-900 hover:font-bold cursor-pointer border-b border-gray-200 pb-2">
        <Link to={item.link} className="flex-1">
            <div className="truncate">
                {item.text}
            </div>
        </Link>
        <FaArrowRight className="ml-24 text-gray-600 hover:text-gray-900" />
    </div>
);

export const DoctorCard = ({ name, icon, to }) => (
    <Link to={to} className="flex flex-col items-center justify-center py-2 text-neutral-400 hover:text-black transition duration-300 ease-in-out transform hover:scale-105">
        {icon}
        <span className="text-xs">{name}</span>
    </Link>
);

export const FaqItem = ({ question }) => (
    <li className='mb-1'>{question}</li>
);