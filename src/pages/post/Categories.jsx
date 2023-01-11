import { useSelector } from 'react-redux';

import CreateCategoryForm from '../../components/forms/postForms/CreateCategoryForm';
import Category from '../../components/post/Category';

import { categorySelector } from '../../store/features/categorySlice';

const Categories = () => {
  const { categories } = useSelector(categorySelector);

  return (
    <section className="w-full pl-6">
      <CreateCategoryForm />

      <h2 className="text-3xl mt-8 my-4">Categories</h2>
      <div className="mt-6 grid grid-cols-3 gap-2 gap-y-8">
        {categories.length &&
          categories.map((category) => {
            return <Category key={category.id} {...category.data()} />;
          })}
      </div>
    </section>
  );
};

export default Categories;
