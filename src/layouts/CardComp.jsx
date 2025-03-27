const Card = ({ icon, heading, text }) => {
  return (
    <div className="bg-white rounded-xl border-[1px] border-gray-200 text-center py-6 flex flex-col items-center h-full">
      <div className="bg-white p-4 rounded-full flex items-center justify-center">
        <img src={icon} alt="" className="w-full h-48 object-cover rounded-lg" />
      </div>
      <div className="pl-3 pr-3">
        <h4 className="my-4 text-lg font-bold">{heading}</h4>
        <p className="text-gray-400 text-sm flex-1">{text}</p>
      </div>
    </div>
  );
};

export default Card;
