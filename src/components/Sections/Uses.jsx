import Img1 from "../../assets/services/Болезни грудной клетки.jpg";
import Img2 from "../../assets/services/Интервенционная радиология.jpg";
import Img3 from "../../assets/services/Основы ухода за кожей.jpg";

import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../../utility/animation";
import UsesCard from "../../layouts/UsesCard";
import { Link } from "react-router-dom";
import { HTTP_ROUTE_ALL_SERVICES } from "../../data";

const Uses = () => {
  return (
    <section className="my-14 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 xl:grid-cols-4 gap-8">
        <motion.div
          variants={SlideRight(0.2)}
          whileInView="animate"
          initial="initial"
          className="order-last md:order-first flex flex-col justify-center xl:pr-10"
        >
          <h1 className="text-3xl font-bold text-[#171a67]">How It Helps People</h1>
          <p className="text-gray-500 mt-4">
            Discover how medical advancements improve diagnosis and treatment.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Learn more about cutting-edge medical solutions.{" "}
            <a href="#" className="text-black font-semibold hover:underline">
              Learn More
            </a>
          </p>
          <Link to={HTTP_ROUTE_ALL_SERVICES}>
            <button className="w-fit mt-6 border border-gray-300 px-5 py-3 rounded-lg hover:bg-[#6bb2fe] hover:text-white transition duration-300">
              See More Services
            </button>
          </Link>
        </motion.div>

        <motion.div variants={SlideLeft(0.4)} whileInView="animate" initial="initial">
          <UsesCard Img={Img1} text="Chest Diseases" />
        </motion.div>

        <motion.div variants={SlideLeft(0.6)} whileInView="animate" initial="initial">
          <UsesCard Img={Img2} text="Interventional Radiology" />
        </motion.div>

        <motion.div variants={SlideLeft(0.8)} whileInView="animate" initial="initial">
          <UsesCard Img={Img3} text="Skin Care Basics" />
        </motion.div>
      </div>
    </section>
  );
};

export default Uses;
