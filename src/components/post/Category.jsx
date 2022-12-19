const Category = ({ category }) => {
  return (
    <div className="w-64 h-28 p-4 bg-grey rounded-lg text-center">
      <h3 className="text-2xl">{category}</h3>
      <p className="text-sm">0 Posts</p>
    </div>
  );
};
export default Category;
