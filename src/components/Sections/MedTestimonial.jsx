import { FaHome, FaUserMd, FaSmile, FaAddressCard } from "react-icons/fa";

import img1 from "../../assets/slider/slider1.jpg";
import img2 from "../../assets/slider/slider2.jpg";

const MedTestimonial = () => {
  return (
    <>
      <div className="relative pt-16 pb-32 h-96 mb-10 flex content-center items-center justify-center min-h-screen-75">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url(${img1})`,
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 mx-auto text-center sm:text-left">
              <div className="pr-0 sm:pr-12">
                <h1 className="text-white font-semibold text-3xl sm:text-5xl">
                  Our Story
                </h1>
                <p className="mt-4 text-base sm:text-lg text-white">
                  We are committed to providing excellent service and making a difference in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="pb-20 bg-blueGray-200 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <FaHome className='w-8 h-8' />
                  </div>
                  <h6 className="text-xl font-semibold">
                    Progress
                  </h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    We continue to evolve and grow, striving for excellence in everything we do.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                    <FaUserMd className='text-black w-8 h-8' />
                  </div>
                  <h6 className="text-xl font-semibold">
                    Achievements
                  </h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    We are proud of our achievements and the impact we've had on our industry.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <FaSmile className='w-8 h-8' />
                  </div>
                  <h6 className="text-xl font-semibold">
                    Get in Touch
                  </h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Feel free to reach out to us for more information and inquiries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MedTestimonial