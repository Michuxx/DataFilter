type InputProps = {
  type: string;
  placeholder: string;
};

const Input = ({ type, placeholder }: InputProps) => {
  return <input type={type} name="" id="" placeholder={placeholder} />;
};

export default Input;
