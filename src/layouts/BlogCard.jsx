const BlogCard = ({ img, headlines, desc, onClick }) => {
  return (
    <div className="w-full lg:w-1/5 p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out h-[350px] flex flex-col justify-between" onClick={onClick}>
      <img
        className="w-full h-48 object-cover rounded-lg"
        src={img}
        alt="img"
      />
      <h2 className="text-lg text-center font-semibold">{headlines}</h2>
      <p className="text-center text-sm">
        {desc}
      </p>
    </div>
  );
};

export default BlogCard;
