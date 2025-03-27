import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import HeroSection from "../../components/Sections/Hero"

const Main = () => {
    return (
        <div className="bg-gray-100">
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 pb-20">
                <HeroSection />
            </div>
            <div className="w-full border-t border-gray-300 my-4"></div>
            <Footer />
        </div>
    )
}

export default Main