import HeroImage from "../../assets/about/about.jpg";
import { SlideUp } from "../../utility/animation";
import { motion } from "framer-motion";

const MedHero = () => {
  return (
    <section className="py-10 px-4">
      <div className="bg-[#fbfbfb] rounded-3xl max-w-full h-1/2 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px] p-6 md:p-10">
        {/* Text section */}
        <div className="flex flex-col justify-center md:pr-10">
          <div className="mt-10 md:mt-0 space-y-6 text-center md:text-left">
            <motion.h1
              variants={SlideUp(0.2)}
              whileInView="animate"
              initial="initial"
              className="text-5xl font-bold text-[#171a67]"
            >
              Medical Title Text <br /> Assessment Tool
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              whileInView="animate"
              initial="initial"
              className="text-lg text-gray-500 mt-4"
            >
              A set of solutions designed to help quickly identify coronavirus
              symptoms and get reliable information regarding COVID-19 concerns.
            </motion.p>
          </div>
        </div>

        {/* Image section */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center"
        >
          <img src={HeroImage} alt="COVID-19 Assessment Tool" className="max-w-full h-auto rounded-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default MedHero;
