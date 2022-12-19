import Editor from '../../content-editor/Editor';
import Input from '../../Input';
import Button from '../../Button';

const CreatePostForm = () => {
  return (
    <form className="w-3/4 h-auto font-dmSans">
      <div className="w-full mb-4">
        <label htmlFor="email" className="text-sm font-medium">
          Email Address
        </label>
        {/* <Input type="email" inputId="email" placeholder="example@gmail.com" value={} handleOnChange={} /> */}
      </div>
      <Editor />
      <div className="w-full mb-4">
        <label htmlFor="email" className="text-sm font-medium">
          Email Address
        </label>
        {/* <Input type="email" inputId="email" placeholder="example@gmail.com" value={} handleOnChange={} /> */}
      </div>
    </form>
  );
};
export default CreatePostForm;
