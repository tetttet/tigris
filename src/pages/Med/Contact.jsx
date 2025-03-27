import Navbar from '../../components/Navbar/Navbar'
import { MedFooter } from '../../components/Footer/MedFooter'
import Message from "../../components/Data/Message"
import Contact from '../../components/Contact'
import CallToAction from '../../components/elements/CallToAction'

const MedContact = () => {
    return (
        <>
            <Navbar />
            <Contact />
            <CallToAction />
            <Message />
            <MedFooter />
        </>
    )
}

export default MedContact