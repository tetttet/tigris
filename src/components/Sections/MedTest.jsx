
const MedTest = ({ Img, title, subtitle }) => {
    return (
        <div className="">
            <div className="relative pt-16 pb-32 h-96 mb-10 flex content-center items-center justify-center min-h-screen-75">
                <div
                    className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage: `url(${Img})`,
                    }}
                >
                    <span
                        id="blackOverlay"
                        className="w-full h-full absolute opacity-70 bg-black"
                    ></span>
                </div>
                <div className="container relative mx-auto">
                    <div className="items-center flex flex-wrap">
                        <div className="lg:w-6/12 px-4 lg:ml-auto lg:mr-auto sm:ml-10 mr-auto text-center">
                            <div className="pr-12 ml-10">
                                <h1 className="text-white font-semibold text-5xl">
                                    {title}
                                </h1>
                                <p className="mt-4 text-lg text-white">
                                    {subtitle}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MedTest