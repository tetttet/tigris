import Blogs from "../../components/Blogs";
import MedTest from "../../components/Sections/MedTest";
import Img from "../../assets/services/Как поддерживать здоровье кожи.jpg";
import Navbar from "../../components/Navbar/Navbar";
import { MedFooter } from "../../components/Footer/MedFooter";

const AllService = () => {

  return (
    <>
    <Navbar />
      <MedTest
        Img={Img}
        title="All Our Services Page"
        subtitle="We are committed to providing excellent service and making a difference in the world."
      />

      <Blogs />
      <MedFooter />
    </>
  );
};

export default AllService;