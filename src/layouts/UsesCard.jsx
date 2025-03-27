const UsesCard = ({ Img, text }) => {
    return (
        <div className="flex flex-col items-center h-full">
            <img 
                src={Img} 
                alt={text} 
                className="w-full h-64 object-cover rounded-3xl" 
            />
            <p className="text-gray-500 mt-4 text-center">{text}</p>
        </div>
    );
}

export default UsesCard;

