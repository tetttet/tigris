import { FaAmbulance, FaLongArrowAltRight, FaAccessibleIcon } from 'react-icons/fa';
import { IoIosClock } from 'react-icons/io';
import { Link } from 'react-router-dom';

const ScheduleItem = ({ icon, title, subtitle, description, hours }) => (
    <div className="single-schedule primary-bg-blue-header text-white p-6 rounded-lg shadow-md hover:transform hover:translate-y-[-5px] hover:shadow-lg transition-transform duration-300">
        <div className="inner flex flex-col items-center">
            <div className="icon text-4xl text-primary mb-4">{icon}</div>
            <div className="single-content text-center">
                <span className="text-sm ">{subtitle}</span>
                <h4 className="text-xl font-semibold mt-2">{title}</h4>
                <p className="mt-4">{description}</p>
                {hours && (
                    <ul className="time-sidual mt-4 flex flex-col space-y-2">
                        {hours.map((hour, index) => (
                            <li key={index} className="flex justify-between">
                                <span className="text-sm">{hour.day}</span>
                                <span className="font-semibold">{hour.time}</span>
                            </li>
                        ))}
                    </ul>
                )}
                <Link href="#" className="text-primary font-medium mt-6 inline-flex items-center hover:underline">
                    LEARN MORE
                    <FaLongArrowAltRight className="ml-2" />
                </Link>
            </div>
        </div>
    </div>
);

const ScheduleSection = () => {
    const openingHours = [
        { day: 'Monday - Friday', time: '8.00-20.00' },
        { day: 'Saturday', time: '9.00-18.30' },
        { day: 'Monday - Thursday', time: '9.00-15.00' }
    ];

    return (
        <section className="schedule py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="schedule-inner grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ScheduleItem
                        icon={<FaAmbulance />}
                        title="Emergency Cases"
                        subtitle="Lorem Amet"
                        description="Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales."
                        hours={openingHours}
                    />
                    <ScheduleItem
                        icon=<FaAccessibleIcon />
                        title="Doctors Timetable"
                        subtitle="Fusce Porttitor"
                        description="Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales."
                        hours={openingHours}
                    />
                    <ScheduleItem
                        icon={<IoIosClock />}
                        title="Opening Hours"
                        subtitle="Donec luctus"
                        description="Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales."
                        hours={openingHours}
                    />
                </div>
            </div>
        </section>
    );
};

export default ScheduleSection;
