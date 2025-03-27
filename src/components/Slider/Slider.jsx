const VideoSlider = () => {
    return (
        <article className="relative w-full lg:h-[70vh] md:min-h-[50vh] flex flex-shrink-0 overflow-hidden shadow-lg">
            <video
                src="/assets/video/hero.mp4"
                autoPlay
                loop
                muted
                className="absolute inset-0 z-10 h-full w-full object-cover opacity-95"
            />
            <div className="absolute top-1/4 left-1/12 z-20 text-white text-4xl font-bold uppercase tracking-wider drop-shadow-lg">
                <div className="text-5xl font-bold mb-1">
                    Welcome to Tigris Group
                </div>
                <div className="text-2xl font-light">
                    Your trusted partner in Istanbul
                </div>
            </div>
            <figcaption className="absolute inset-x-0 bottom-4 z-20 w-96 mx-auto p-4 font-light text-sm text-center tracking-widest leading-snug bg-gray-300 bg-opacity-25">
                Experience the best of Istanbul with our exclusive services.
            </figcaption>
        </article>
    );
};

export default VideoSlider;