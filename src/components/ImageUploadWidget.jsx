import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { getPostImage } from '../store/features/postSlice';

const ImageUploadWidget = () => {
  const dispatch = useDispatch();

  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  const handleClick = () => widgetRef.current.open();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: process.env.REACT_APP_CLOUDINARY_CLOUDNAME,
        uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
      },
      (error, result) => {
        const { event, info } = result;
        if (event === 'queues-end') {
          const { files } = info;
          const { uploadInfo } = files[0];
          const imageUrl = uploadInfo.url;
          dispatch(getPostImage(imageUrl));
        }
      },
    );
  }, []);

  return (
    <>
      <label htmlFor="image" className="mb-2">
        Post Image
      </label>
      <button
        type="button"
        className="w-auto h-12 rounded-lg px-4 py-2 bg-accent text-background"
        onClick={handleClick}
      >
        Upload Post Image
      </button>
    </>
  );
};
export default ImageUploadWidget;
