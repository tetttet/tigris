import Breadcrumb from "../../components/elements/Breadcrumb"
import Footer from "../../components/Footer/Footer"
import Item from "../../components/Grid/DoctorList"
import MedNavbar from "../../components/Navbar/MedNavbar"
import ConsultationBanner from "../../components/Sections/Banner"

const About = () => {
    return (
        <>
            <MedNavbar />
            <Breadcrumb pageName='About Us' pageDescription='About Us' />
            <Item />
            <ConsultationBanner />
            <Footer />
        </>
    )
}

export default About