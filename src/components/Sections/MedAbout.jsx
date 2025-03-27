import { FaUserMd, FaAccusoft } from "react-icons/fa";
import video1 from "../../assets/tigris_intro_video2.mp4";

const sectionTitle = "We Offer Different Services To Improve Your Health";
const sectionDescription = "Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts";

const whoWeAreTitle = "Who We Are";
const whoWeAreDescription1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra antege vel est lobortis, a commodo magna rhoncus. In quis nisi non emet quam pharetra commodo.";
const whoWeAreDescription2 = "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.";

const listItems1 = [
    "Maecenas vitae luctus nibh.",
    "Duis massa massa.",
    "Aliquam feugiat interdum."
];

const listItems2 = [
    "Maecenas vitae luctus nibh.",
    "Duis massa massa.",
    "Aliquam feugiat interdum."
];

const MedAbout = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-gray-800">{sectionTitle}</h2>
                    <p className="text-lg text-gray-600 my-3">{sectionDescription}</p>
                </div>

                <div className="flex flex-wrap">
                    <div className="lg:w-1/2 w-full px-4 sm:px-6 mb-8 sm:mb-12 mx-auto">
                        <div className="p-4 sm:p-8 rounded-lg">
                            <div className="relative mb-4 sm:mb-6">
                                <div className="absolute inset-0 rounded-lg">
                                    <div className="waves-block">
                                        <div className="waves wave-1"></div>
                                        <div className="waves wave-2"></div>
                                        <div className="waves wave-3"></div>
                                    </div>
                                </div>
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    className="rounded-lg shadow-sm shadow-gray-50 w-full max-w-sm sm:max-w-full mx-auto"
                                >
                                    <source src={video1} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full px-4 sm:px-6">
                        <div className="bg-white p-4 sm:p-8 rounded-lg">
                            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">{whoWeAreTitle}</h3>
                            <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">{whoWeAreDescription1}</p>
                            <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">{whoWeAreDescription2}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <ul className="list-none">
                                    {listItems1.map((item, index) => (
                                        <li key={index} className="flex items-center text-gray-600">
                                            <FaUserMd className='w-4 h-4 mr-2' />
                                            <i className="fa fa-caret-right mr-2"></i>{item}
                                        </li>
                                    ))}
                                </ul>
                                <ul className="list-none">
                                    {listItems2.map((item, index) => (
                                        <li key={index} className="flex items-center text-gray-600">
                                            <FaAccusoft className='w-4 h-4 mr-2' />
                                            <i className="fa fa-caret-right mr-2"></i>{item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MedAbout;
