
const TrustCard = (item) => {
    return (
        <>
            <img
                src={item.icon}
                alt={item.heading}
                className="mx-auto md:mx-0 rounded-3xl"
            />
            <p className="text-3xl font-semibold text-[#171a67]">
                {item.heading}
            </p>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-sm text-gray-400">
                {item.additionalText}{" "}
                <span className="text-black font-semibold">{item.linkText}</span>
            </p>
        </>
    )
}

export default TrustCard