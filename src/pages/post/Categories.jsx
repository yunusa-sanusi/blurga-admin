import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CreateCategoryForm from '../../components/forms/postForms/CreateCategoryForm';
import Category from '../../components/post/Category';

import { getCategories, postSelector } from '../../store/features/postSlice';
import { getAllCategories } from '../../utils/firebase/post';

const Categories = () => {
  const { categories } = useSelector(postSelector);
  const dispatch = useDispatch();

  const getAllCategoryDocuments = async () => {
    const categories = await getAllCategories();
    dispatch(getCategories(categories));
  };

  useEffect(() => {
    getAllCategoryDocuments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
