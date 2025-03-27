import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";

import Img1 from "../../assets/services/Болезни грудной клетки.jpg";
import Img2 from "../../assets/services/Интервенционная радиология.jpg";
import TrustCard from "../../layouts/TrustCard";

const trustData = [
  {
    icon: Img1,
    heading: "Based on Reliable Sources",
    description:
      "We want our tool to be safe and reliable, so its logic is based on the official global information provided by the WHO.",
    additionalText:
      "Enhance your preliminary diagnosis and triage with pediatric content.",
    linkText: "Learn More",
  },
  {
    icon: Img2,
    heading: "Based on Reliable Sources",
    description:
      "We want our tool to be safe and reliable, so its logic is based on the official global information provided by the WHO.",
    additionalText:
      "Enhance your preliminary diagnosis and triage with pediatric content.",
    linkText: "Learn More",
  },
];

const Trust = () => {
  return (
    <section className="bg-[#fcfcfc] py-16 mt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="py-6 mb-8 text-4xl font-bold text-[#171a67] text-center"
        >
          Why You Can Trust These Tools
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trustData.map((item, index) => (
            <motion.div
              key={index}
              variants={SlideUp(0.4 + index * 0.2)}
              initial="initial"
              whileInView="animate"
              className="space-y-6 text-center md:text-left md:px-16 xl:px-32"
            >
              <TrustCard {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
