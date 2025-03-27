import Navbar from '../../components/Navbar/Navbar'
import { MedFooter } from '../../components/Footer/MedFooter'
import { FeaturesSection, PortfolioSection } from "../../components/Sections/Feature"
import { MenuContainer } from "../../components/Sections/MenuContainer"


const MedDoctors = () => {
    return (
        <>
            <Navbar />
            <FeaturesSection />
            <PortfolioSection />
            <MenuContainer />
            <div className='pb-20'></div>
            <MedFooter />
        </>
    )
}

export default MedDoctors