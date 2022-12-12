const buttonStyles = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  accent: 'bg-accent',
};

const Button = ({ value, styleType, handleClick, type }) => {
  return (
    <button
      type={type}
      className={`w-full h-12 rounded-lg ${buttonStyles[styleType]} ${
        buttonStyles[styleType] === 'accent'
          ? 'text-background'
          : 'text-neutral'
      }`}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};
export default Button;
