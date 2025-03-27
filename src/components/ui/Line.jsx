const Line = ({ borderColor = "border-gray-300" }) => {
    return (
        <div className={`w-full border-t ${borderColor} my-4`}></div>
    );
};

export default Line;
