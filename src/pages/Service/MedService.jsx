import { MedFooter } from "../../components/Footer/MedFooter"
import HowItHelps from "../../components/Sections/HowItHelps"
import MedHero from "../../components/Sections/MedHero"
import MedTest from "../../components/Sections/MedTest"
import Trust from "../../components/Sections/Trust"
import Uses from "../../components/Sections/Uses"

import Img from "../../assets/services/Анестезия и реанимация.jpg";
import Navbar from "../../components/Navbar/Navbar"

const MedService = () => {
    return (
        <>        
        <Navbar />
        <main className="overflow-x-hidden">
            <MedTest
                Img={Img}
                title="Our Sevices"
                subtitle="We are committed to providing excellent service and making a difference in the world."
            />

            <MedHero />
            <HowItHelps />
            <Uses />
            <Trust />

            <MedFooter />
        </main>
        </>
    )
}

export default MedService