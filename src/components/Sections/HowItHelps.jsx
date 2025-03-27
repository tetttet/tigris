import Card from "../../layouts/CardComp.jsx";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../../utility/animation";

import img1 from "../../assets/services/Болезни грудной клетки.jpg";
import img2 from "../../assets/services/Интервенционная радиология.jpg";
import img3 from "../../assets/services/Основы ухода за кожей.jpg";
import { Link } from "react-router-dom";
import { HTTP_ROUTE_ALL_SERVICES } from "../../data.js";

const cardData = [
  {
    icon: img1,
    heading: "Болезни грудной клетки (болезни легких)",
    text: "Основные заболевания легких, их симптомы, методы диагностики и лечения.",
    animationDelay: 0.2,
  },
  {
    icon: img2,
    heading: "Интервенционная радиология",
    text: "Современные минимально инвазивные методы диагностики и лечения с использованием рентгеновского оборудования.",
    animationDelay: 0.4,
  },
  {
    icon: img3,
    heading: "Основы ухода за кожей",
    text: "Правильный уход за кожей, защита от внешних факторов и профилактика возрастных изменений.",
    animationDelay: 0.6,
  },
];

const HowItHelps = () => {
  return (
    <section className="py-16 my-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cards */}
        <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              variants={SlideRight(card.animationDelay)}
              whileInView="animate"
              initial="initial"
            >
              <Card icon={card.icon} heading={card.heading} text={card.text} />
            </motion.div>
          ))}
        </div>

        {/* Text Section */}
        <motion.div
          variants={SlideLeft(0.8)}
          whileInView="animate"
          initial="initial"
          className="flex flex-col xl:justify-center xl:pr-10 ml-5"
        >
          <h1 className="text-3xl font-bold text-[#171a67]">How It Helps People</h1>
          <p className="text-gray-500 mt-4">
            Our tool provides a simple and effective way to assess risks and access healthcare advice.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Get reliable medical guidance to ensure your well-being.{" "}
            <a href="#" className="text-black font-bold hover:underline">
              Learn More
            </a>
          </p>
          <Link to={HTTP_ROUTE_ALL_SERVICES}>
            <button className="w-fit mt-6 border border-gray-300 px-5 py-3 rounded-lg hover:bg-[#6bb2fe] hover:text-white transition duration-300">
              See More Services
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItHelps;
