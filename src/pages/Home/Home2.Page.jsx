import ChatBot from "../../components/ChatBot/ChatBot"
import Message from "../../components/Data/Message"
import { MedFooter } from "../../components/Footer/MedFooter"
import Card from "../../components/Grid/Card"
import Social from "../../components/Item/Social"
import Navbar from "../../components/Navbar/Navbar"
import { Banner, Clients, FeaturesSection, PortfolioSection } from "../../components/Sections/Feature"
import MedAbout from "../../components/Sections/MedAbout"
import MedTestimonial from "../../components/Sections/MedTestimonial"
import { MenuContainer } from "../../components/Sections/MenuContainer"
import ScheduleSection from "../../components/Sections/Schedule"
import MedSlider from "../../components/Slider/MedSlider"

const Home2 = () => {
    return (
        <>
            <Navbar />

            <Banner />

            <MedSlider />

            <ScheduleSection />
            <MedTestimonial />

            <FeaturesSection />
            <MedAbout />

            <PortfolioSection />
            <Card />

            <MenuContainer />

            <Clients />
            <Message />

            <MedFooter />
            <ChatBot />
            <Social />
        </>
    )
}

export default Home2