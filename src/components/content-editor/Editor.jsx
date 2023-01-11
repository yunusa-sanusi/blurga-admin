import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = ({ content, handleOnChange }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ];

  return (
    <ReactQuill
      theme="snow"
      value={content}
      onChange={handleOnChange}
      modules={modules}
      formats={formats}
      className="w-full h-72 border-opacity-50"
    />
  );
};
export default Editor;
