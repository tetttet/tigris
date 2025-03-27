import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaAngleRight } from "react-icons/fa6";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);

  return (
    <section className="w-screen overflow-hidden h-full lg:py-20 py-10 px-5 sm:py-32 sm:px-10 text-black primary-bg-whiter">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 w-full flex flex-col md:flex-row items-end justify-between">
          <h1 id="title" className=" lg:text-6xl md:text-5xl text-3xl font-medium opacity-0 translate-y-20">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link text-blue-400 hover:underline cursor-pointer flex items-center text-xl opacity-0 translate-y-20">
              Watch the event
              <button className="ml-2">
                <FaAngleRight className="text-blue-400" />
              </button>
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;