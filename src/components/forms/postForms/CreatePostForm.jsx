import { useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';

import Editor from '../../content-editor/Editor';
import Input from '../../Input';
import Button from '../../Button';
import ImageUploadWidget from '../../ImageUploadWidget';

import { postSelector } from '../../../store/features/postSlice';
import { getLoggedInUser } from '../../../store/features/userSlice';
import { categorySelector } from '../../../store/features/categorySlice';
import { createPostDocument } from '../../../utils/firebase/post';

const defaultFormFields = {
  title: '',
  category: '',
};

const CreatePostForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [content, setContent] = useState('');
  const { title, category } = formFields;
  const { postImage } = useSelector(postSelector);
  const { categories } = useSelector(categorySelector);
  const { user } = useSelector(getLoggedInUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const addPost = async (postData) => await createPostDocument(postData);

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = v4();
    const postData = {
      id,
      title,
      category,
      content,
      imageUrl: postImage,
      author: user.displayName,
    };
    addPost(postData);
  };

  return (
    <form className="w-full h-auto p-6 rounded-lg bg-grey font-dmSans">
      <div className="w-full mb-4">
        <label htmlFor="email" className="text-sm font-medium">
          Title
        </label>
        <Input
          type="text"
          inputId="title"
          placeholder="Enter post title"
          value={title}
          handleOnChange={handleChange}
        />
      </div>
      <div className="w-full mb-16">
        <label className="text-sm font-medium mb-2">Content</label>
        <Editor content={content} handleOnChange={setContent} />
      </div>

      <div className="w-full mb-4">
        <label htmlFor="category" className="text-sm font-medium">
          Category
        </label>
        <select
          name="category"
          id="category"
          className="w-full h-12 mt-1 px-4 rounded-lg bg-background outline-none text-neutral/50"
          value={category}
          onChange={handleChange}
        >
          <option value="">Select a category</option>
          {categories &&
            categories.map((categoryObj) => {
              const { id, category } = categoryObj.data();
              return (
                <option key={id} value={category} className="text-neutral">
                  {category}
                </option>
              );
            })}
        </select>
      </div>

      <div className="w-full mb-8 flex flex-col">
        <ImageUploadWidget />
      </div>

      <Button
        type="submit"
        value="Create Post"
        styleType="primary"
        handleClick={handleSubmit}
      />
    </form>
  );
};
export default CreatePostForm;
