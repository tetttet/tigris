import { Link } from "react-router-dom"

const Breadcrumb = ({ pageName, pageDescription }) => {
    return (
        <>
            <div className="primary-bg-blue-blacker relative z-10 overflow-hidden pb-[60px] pt-[80px] md:pt-[130px] lg:pt-[100px]">
                <div className="bg-gradient-to-r from-transparent via-transparent to-transparent absolute bottom-0 left-0 h-px w-full"></div>
                <div className="container">
                    <div className="-mx-4 flex flex-wrap items-center">
                        <div className="w-full px-4">
                            <div className="text-center">
                                <h1 className="text-white mb-4 text-3xl font-bold sm:text-4xl md:text-[40px] md:leading-[1.2]">
                                    {pageName}
                                </h1>
                                <p className="text-gray-400 mb-5 text-base">
                                    {pageDescription}
                                </p>

                                <ul className="flex items-center justify-center gap-[10px]">
                                    <li>
                                        <Link
                                            to="/"
                                            className="text-white flex items-center gap-[10px] text-base font-medium"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <p className="text-gray-400 flex items-center gap-[10px] text-base font-medium">
                                            <span className="text-gray-500">
                                                {" "}
                                                /{" "}
                                            </span>
                                            {pageName}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Breadcrumb
