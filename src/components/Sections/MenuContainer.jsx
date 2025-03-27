import { useState } from "react"
import { IoHeart, IoFlask, IoPulse, IoGitBranch, IoFemale, IoEye, IoColorPalette, IoMedkit } from "react-icons/io5"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import MenuDetail from "../elements/MenuDetail";
import { HTTP_ROUTE_MENU_SERVICE } from "../../data";

const categories = [
    {
        id: 1,
        name: "Анестезия и реанимация",
        urlParamName: "anesthesia-reanimation",
        icon: <IoHeart className="w-8 h-8" />,
        description: "Анестезия и реанимация — это область медицины, занимающаяся обезболиванием и поддержанием жизненно важных функций организма во время хирургических вмешательств, а также лечением пациентов, находящихся в критическом состоянии."
    },
    {
        id: 2,
        name: "Биохимия и клиническая биохимия",
        urlParamName: "biochemistry",
        icon: <IoFlask className="w-8 h-8" />,
        description: "Биохимия и клиническая биохимия исследуют химические процессы, происходящие в организме человека, и применяют эти знания для диагностики заболеваний, а также для разработки методов лечения."
    },
    {
        id: 3,
        name: "Болезни грудной клетки",
        urlParamName: "chest-diseases",
        icon: <IoPulse className="w-8 h-8" />,
        description: "Болезни грудной клетки охватывают заболевания легких, сердца и сосудов, такие как пневмония, бронхит, эмфизема, а также болезни, связанные с дыхательной и сердечно-сосудистой системами."
    },
    {
        id: 4,
        name: "Гастроэнтерология",
        urlParamName: "gastroenterology",
        icon: <IoGitBranch className="w-8 h-8" />,
        description: "Гастроэнтерология изучает заболевания желудочно-кишечного тракта, включая заболевания желудка, кишечника, печени, поджелудочной железы и желчевыводящих путей."
    },
    {
        id: 5,
        name: "Гинекология и акушерство",
        urlParamName: "gynecology",
        icon: <IoFemale className="w-8 h-8" />,
        description: "Гинекология и акушерство занимаются здоровьем женской репродуктивной системы, включая диагностику, лечение заболеваний и проведение родов."
    },
    {
        id: 6,
        name: "Глазные болезни",
        urlParamName: "eye-diseases",
        icon: <IoEye className="w-8 h-8" />,
        description: "Глазные болезни охватывают заболевания органов зрения, такие как катаракта, глаукома, заболевания сетчатки и другие патологии, влияющие на зрение."
    },
    {
        id: 7,
        name: "Дерматология (Дерматология)",
        urlParamName: "dermatology",
        icon: <IoColorPalette className="w-8 h-8" />,
        description: "Дерматология изучает заболевания кожи, волос и ногтей, включая акне, экзему, псориаз, а также инфекционные заболевания, поражающие кожу."
    },
    {
        id: 8,
        name: "Медицинские исследования",
        urlParamName: "medical-research",
        icon: <IoMedkit className="w-8 h-8" />,
        description: "Медицинские исследования включают научные работы, направленные на улучшение здоровья и диагностики, разработку новых методов лечения и терапевтических подходов."
    },
]


export const MenuContainer = () => {
    const [filter, setFilter] = useState("anesthesia-reanimation");

    // Находим выбранную категорию целиком
    const selectedCategory = categories.find(cat => cat.urlParamName === filter);

    return (
        <section className='w-full my-6 max-w-7xl mx-auto' id='menu'>
            <div className='w-full flex flex-col items-center justify-center'>
                <p className='lg:ml-0 ml-5 text-2xl font-semibold relative capitalize before:absolute before:rounded-lg before:content before:w-28 before:h-1 before:-bottom-3 before:left-0 before:bg-[#007fc3] transition-all ease-in-out mr-auto'>
                    Our Medical Specialties
                </p>

                <div className="w-full overflow-hidden">
                    <div className='lg:ml-0 ml-8 w-full flex items-center justify-start lg:justify-center gap-8 py-6 mt-6 overflow-x-auto scrollbar-none snap-x snap-mandatory'>
                        {categories.map((category) => (
                            <motion.div
                                whileTap={{ scale: 0.75 }}
                                key={category.id}
                                className={`group ${filter === category.urlParamName ? "primary-bg-blue-whiter" : "bg-card"} w-36 h-40 min-w-[94px] cursor-pointer rounded-lg drop-shadow-md flex flex-col gap-3 items-center justify-center`}
                                onClick={() => setFilter(category.urlParamName)}
                            >
                                <div className={`w-16 h-16 pb-10 mt-3 rounded-full shadow-lg ${filter === category.urlParamName ? "bg-white" : "primary-bg-blue-whiter"} group-hover:bg-white flex items-center justify-center`}>
                                    <span className={`${filter === category.urlParamName ? "primary-tx-blue-whiter" : "text-white"} pt-10 group-hover:text-white`}>
                                        {category.icon}
                                    </span>
                                </div>
                                <div className="flex items-center justify-center w-full h-full">
                                    <p className={`primary-text ${filter === category.urlParamName ? "text-white" : "text-textColor"}  text-center break-words`}>
                                        {category.name}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <button className="lg:mt-0 mt-5">
                    <Link to={HTTP_ROUTE_MENU_SERVICE} className="primary-bg-blue-whiter text-white py-2 px-4 rounded-lg">View All Specialties</Link>
                </button>

                {/* Блок для отображения выбранной категории */}
                <div className="text-lg font-medium mt-4 text-gray-700">
                    {/* Передаем выбранную категорию целиком */}
                    <MenuDetail category={selectedCategory} />
                </div>
            </div>
        </section>
    );
};
