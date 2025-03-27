import { Link } from 'react-router-dom'
import img1 from '../../assets/features/urology-treatments_mobile.png'
import img2 from '../../assets/features/ear-nose-or-throat-treatment.jpg'
import img3 from '../../assets/features/dental_care.jpg'

const industries = [
    {
        title: "Urology Treatments",
        image: img1,
        description: "As Tigris Group, we offer intermediary healthcare services, facilitating urology procedures for our patients with expert medical guidance and seamless coordination."
    },
    {
        title: "Ear Nose Throat treatments",
        image: img2,
        description: "As Tigris Group, we serve as an intermediary healthcare provider, ensuring our guests receive the highest quality care for ENT treatments through our trusted medical network."
    },
    {
        title: "Dental Care",
        image: img3,
        description: "As Tigris Group, we provide intermediary healthcare services, ensuring safe, comfortable, and high-quality oral and dental treatments for our guests."
    }
]

const Card = () => {
    return (
        <section className="bg-gray-50">
            <div className="w-full border-t border-gray-300 my-4"></div>
            <div className="py-10 sm:py-16 block lg:py-24 relative bg-opacity-50 z-40">
                <div className="relative mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
                        <div className="max-w-xl mx-auto text-center">
                            <div className="inline-flex px-4 py-1.5 mx-auto rounded-full">
                                <p className="text-4xl font-semibold tracking-widest text-g uppercase">Intermediary Health Services</p>
                            </div>
                            <p className="mt-4 text-base leading-relaxed text-gray-600 group-hover:text-white">
                                Comprehensive support for international patients, connecting them with expert medical care and tailored treatment solutions.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-2 mt-12 sm:grid-cols-3 lg:mt-20">
                            {industries.map((industry, index) => (
                                <Link to="#" key={index} className="transition-all duration-500 bg-white hover:bg-gray-100 hover:shadow-xl m-2 p-4 relative z-40 group">
                                    <div className="absolute bg-blue-500/50 top-0 left-0 w-24 h-1 z-30 transition-all duration-300 group-hover:bg-white group-hover:w-1/2"></div>
                                    <div className="py-2 px-9 relative">
                                        <div className="w-full h-48 overflow-hidden">
                                            <img src={industry.image} alt={industry.title} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" />
                                        </div>
                                        <h3 className="mt-8 text-lg font-semibold text-black">{industry.title}</h3>
                                        <p className="mt-4 text-base text-gray-600 ">
                                            {industry.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full border-t border-gray-300 my-4"></div>
        </section>
    )

}

export default Card
