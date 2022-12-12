const Input = ({ type, inputId, placeholder, value, handleOnChange }) => {
  return (
    <input
      type={type}
      className="w-full h-12 mt-1 px-4 rounded-lg bg-background outline-none text-neutral/50"
      placeholder={placeholder}
      id={inputId}
      name={inputId}
      value={value}
      onChange={handleOnChange}
    />
  );
};
export default Input;
