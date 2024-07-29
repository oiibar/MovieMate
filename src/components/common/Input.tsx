interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder = "Enter text",
  value,
  onChange,
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoFocus
      className="placeholder:text-[#303030] bg-[#000000] py-1 px-3 rounded-full focus:border-none"
    />
  );
};

export default Input;
