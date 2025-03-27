import Faq from "../../components/Faq/Faq"
import Footer from "../../components/Footer/Footer"
import Item from "../../components/Grid/DoctorList"
import MedNavbar from "../../components/Navbar/MedNavbar"
import { Gallery, ContactSection, Feature, PortSection } from "../../components/Sections/Feature"
import Intro from "../../components/Sections/Intro"
import Promote from "../../components/Sections/Promote"
import Testimonial from "../../components/Sections/Testimonial"
import Slider from "../../components/Slider/Slider"

const Home1 = () => {
    return (
        <>
            <MedNavbar />
            <Slider />
            <div className="flex flex-col">
                <Intro />
                <div className="lg:mt-5 mt-[500px]">
                    <Promote />
                </div>
            </div>
            <Feature />
            <Item />
            <ContactSection />
            <PortSection />
            <Testimonial />
            <Gallery />
            <Faq />
            <Footer />
        </>
    )
}

export default Home1