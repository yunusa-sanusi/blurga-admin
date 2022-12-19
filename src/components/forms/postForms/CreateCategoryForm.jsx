import { useState } from 'react';
import { uuidv4 as v4 } from '@firebase/util';

import Input from '../../Input';
import Button from '../../Button';

import { createCategoryDocument } from '../../../utils/firebase/post';

const defaultFormFields = { category: '' };

const CreateCategoryForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { category } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = v4();

    const categoryData = { id, category, createAt: new Date() };
    createCategoryDocument(categoryData);

    setFormFields(defaultFormFields);
  };

  return (
    <>
      <h2 className="text-xl mb-4">Add Category</h2>
      <form className="w-3/4 flex bg-grey p-4 rounded-lg justify-between items-center">
        <div className="w-[70%] mr-4">
          <Input
            type="text"
            inputId="category"
            value={category}
            placeholder="Enter Category"
            handleOnChange={handleChange}
          />
        </div>
        <div className="w-[30%]">
          <Button
            type="submit"
            value="Add Category"
            styleType="primary"
            handleClick={handleSubmit}
          />
        </div>
      </form>
    </>
  );
};
export default CreateCategoryForm;
