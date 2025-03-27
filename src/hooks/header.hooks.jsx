import { FaUserMd, FaHeartbeat, FaStethoscope, FaHospitalAlt, FaMedkit, FaUserNurse, FaBone, FaLungs, FaEye, FaBrain, FaShieldAlt, FaHands } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import aboutImg from "../assets/about.jpg";
import { DoctorCard, FaqItem, ListItem } from "../layouts/header.layouts";
import { HTTP_ROUTE_MED_ABOUT, HTTP_ROUTE_MED_CONTACT, HTTP_ROUTE_MED_FAQ, HTTP_ROUTE_MED_HOME, HTTP_ROUTE_MED_SERVICES } from '../data';

export const Home = () => {
  return (
    <></>
  );
}

export const About = () => {

  const listItem = [
    {
      text: "Learn more",
      link: HTTP_ROUTE_MED_ABOUT
    },
    {
      text: "Explore the range",
      link: HTTP_ROUTE_MED_ABOUT
    },
    {
      text: "Get in touch",
      link: HTTP_ROUTE_MED_CONTACT
    },
    {
      text: "Our Services",
      link: HTTP_ROUTE_MED_SERVICES
    },
    {
      text: "Find answers",
      link: HTTP_ROUTE_MED_FAQ
    }
  ]

  return (
    <div className="flex w-[550px] border-t-2 primary-br-blue-whiter">
      <img
        src={aboutImg}
        alt="Description"
        className="w-64 mr-3"
      />
      <div className="p-4 text-sm">
        {listItem.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </div>

    </div>
  );
};

export const Doctors = () => (
  <div className="w-[550px] border-t-2 primary-br-blue-whiter p-4 grid grid-cols-4 gap-4 divide-x divide-neutral-700">
    {[
      { name: "General Practitioner", icon: <FaUserMd className="mb-2 text-2xl text-blue-400" />, to: HTTP_ROUTE_MED_HOME },
      { name: "Cardiologist", icon: <FaHeartbeat className="mb-2 text-2xl text-red-400" />, to: HTTP_ROUTE_MED_HOME },
      { name: "Surgeon", icon: <FaStethoscope className="mb-2 text-2xl text-green-400" />, to: HTTP_ROUTE_MED_HOME },
      { name: "Pediatrician", icon: <FaHospitalAlt className="mb-2 text-2xl text-purple-400" />, to: HTTP_ROUTE_MED_HOME },
      { name: "Dermatologist", icon: <FaMedkit className="mb-2 text-2xl text-yellow-400" />, to: HTTP_ROUTE_MED_HOME },
      { name: "Nurse", icon: <FaUserNurse className="mb-2 text-2xl text-teal-400" />, to: HTTP_ROUTE_MED_HOME },
      { name: "Orthopedist", icon: <FaBone className="mb-2 text-2xl text-orange-400" />, to: HTTP_ROUTE_MED_HOME },
      { name: "Pulmonologist", icon: <FaLungs className="mb-2 text-2xl text-pink-400" />, to: HTTP_ROUTE_MED_HOME },
      { name: "Ophthalmologist", icon: <FaEye className="mb-2 text-2xl text-indigo-400" />, to: HTTP_ROUTE_MED_HOME },
      { name: "Neurologist", icon: <FaBrain className="mb-2 text-2xl text-blue-500" />, to: HTTP_ROUTE_MED_HOME },
      { name: "Immunologist", icon: <FaShieldAlt className="mb-2 text-2xl text-emerald-400" />, to: HTTP_ROUTE_MED_HOME },
      { name: "Physiotherapist", icon: <FaHands className="mb-2 text-2xl text-teal-500" />, to: HTTP_ROUTE_MED_HOME },
    ].map((item, idx) => (
      <DoctorCard key={item.name} name={item.name} icon={item.icon} to={item.to} />
    ))}
  </div>
);

export const Contact = () => {
  const contactInfo = [
    {
      name: "Main Office",
      address: "123 Main St, Springfield, IL 62701, USA",
      phone: "+1 555-555-5555",
      email: "info@company.com",
      googleMapsLink: "https://www.google.com/maps?q=39.7817,-89.6501",
    },
  ];

  return (
    <div className="flex w-[680px] border-t-2 primary-br-blue-whiter p-2">
      <div className="w-1/2">
        {contactInfo.map((location, idx) => (
          <div key={idx} className="mb-4">
            <iframe
              width="350px"
              height="350px"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d946.9572860595387!2d28.990068522942018!3d41.06304235817497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab702fda35e09%3A0xa2b109dcc32feac7!2sPlaza%2033!5e0!3m2!1sru!2str!4v1740738410211!5m2!1sru!2str"
            ></iframe>
          </div>
        ))}
      </div>

      <div className="w-1/2 flex flex-col gap-4">
        {contactInfo.map((location, idx) => (
          <div key={idx} className="ml-10 p-4 border-neutral-200 rounded-lg ">
            <h3 className="text-xl font-semibold">{location.name}</h3>
            <p className="flex items-center text-neutral-500">
              <FaMapMarkerAlt className="mr-2 text-red-500" /> {location.address}
            </p>
            <p className="flex items-center text-neutral-500">
              <FaPhoneAlt className="mr-2 text-green-500" /> {location.phone}
            </p>
            <p className="flex items-center text-neutral-500">
              <FaEnvelope className="mr-2 text-blue-500" /> {location.email}
            </p>
            <a href={location.googleMapsLink} target="_blank" className="text-blue-500 hover:underline">
              View on Google Maps
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Faq = () => {
  const faqQuestions = [
    "What is your return policy?",
    "Do you ship internationally?",
    "How can I track my order?",
    "Can I change my order after placing it?",
    "What payment methods do you accept?"
  ];

  return (
    <div className="w-[600px] border-t-2 primary-br-blue-whiter p-4">
      <h3 className="text-sm mb-3 font-bold">Frequently Asked Questions</h3>
      <ul className="list-disc pl-5">
        {faqQuestions.map((question, index) => (
          <FaqItem key={index} question={question} />
        ))}
      </ul>
    </div>
  );
};

export const Services = () => {
  return (
    <></>
  );
}