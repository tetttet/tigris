import Navbar from '../../components/Navbar/Navbar'
import { MedFooter } from '../../components/Footer/MedFooter'
import Med from '../../components/Sections/MedAbout'
import ScheduleSection from "../../components/Sections/Schedule"
import { Clients } from "../../components/Sections/Feature"

const MedAbout = () => {
  return (
    <>
      <Navbar />
      <Med />
      <ScheduleSection />
      <Clients />
      <MedFooter />
    </>
  )
}

export default MedAbout