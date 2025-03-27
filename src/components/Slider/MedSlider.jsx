import Slider from "react-slick";

import img1 from "../../assets/slider/slider1.jpg";
import img2 from "../../assets/slider/slider2.jpg";
import img3 from "../../assets/slider/slider3.jpg";

const Slide = ({ title, description, img, button1Text, button2Text, button1Link, button2Link }) => (
    <div className="single-slider relative bg-cover bg-center" style={{ backgroundImage: `url(${img})`, height: "50vh" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="container mx-auto py-24 h-full flex items-baseline lg:items-end relative z-10 px-4 sm:px-6">
            <div className="row flex items-center">
                <div className="col-lg-7">
                    <div className="text text-white">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                            {title} <span className="text-primary">Medical</span> Services That You Can{" "}
                            <span className="text-primary">Trust!</span>
                        </h1>
                        <p className="mt-4 text-sm sm:text-base md:text-lg">
                            {description}
                        </p>
                        <div className="button mt-6 flex flex-wrap gap-4">
                            <a href={button1Link} className="btn primary-bg-blue-whiter text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                                {button1Text}
                            </a>
                            <a href={button2Link} className="btn bg-transparent border-2 primary-border-blue text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                                {button2Text}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


const MedSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const slidesData = [
        {
            title: "We Provide",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque.",
            img: img1,
            button1Text: "Get Appointment",
            button2Text: "Learn More",
            button1Link: "#",
            button2Link: "#",
        },
        {
            title: "We Provide",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque.",
            img: img2,
            button1Text: "Get Appointment",
            button2Text: "About Us",
            button1Link: "#",
            button2Link: "#",
        },
        {
            title: "We Provide",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque.",
            img: img3,
            button1Text: "Get Appointment",
            button2Text: "Contact Us",
            button1Link: "#",
            button2Link: "#",
        }
    ];

    return (
        <section className="slider w-full overflow-hidden">
            <Slider {...settings}>
                {slidesData.map((slide, index) => (
                    <Slide
                        key={index}
                        title={slide.title}
                        description={slide.description}
                        img={slide.img}
                        button1Text={slide.button1Text}
                        button2Text={slide.button2Text}
                        button1Link={slide.button1Link}
                        button2Link={slide.button2Link}
                    />
                ))}
            </Slider>
        </section>
    );
};

export default MedSlider;
