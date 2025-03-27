import MedNavbar from '../../components/Navbar/MedNavbar'
import Footer from '../../components/Footer/Footer'
import Highlights from '../../components/Sections/Highlights'
import Intro from '../../components/Sections/Intro'
import Promote from '../../components/Sections/Promote'
import ConsultationBanner from '../../components/Sections/Banner'
import Breadcrumb from '../../components/elements/Breadcrumb'

const MeetExpert = () => {
  return (
    <>
      <MedNavbar />
      <Breadcrumb pageName='Meet Expert' pageDescription='Meet Our Experts' />
      <Highlights />
      <div className="flex flex-col">
        <Intro />
        <div className="lg:mt-5 mt-[500px]">
          <Promote />
        </div>
      </div>

      <ConsultationBanner />
      <Footer />
    </>
  )
}

export default MeetExpert