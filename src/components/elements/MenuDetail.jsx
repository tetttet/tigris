const MenuDetail = ({ category }) => {
    if (!category) return null;

    return (
        <div className="lg:ml-0 ml-5">
            <h2 className="text-2xl font-semibold">{category.name}</h2>
            <p className="mt-2 text-gray-600">{category.description}</p>
        </div>
    );
};

export default MenuDetail