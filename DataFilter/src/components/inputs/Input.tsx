import React from "react";
import "./Input.css";

type InputProps = {
  type: string;
  placeholder: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ type, placeholder, handleChange }: InputProps) => {
  return (
    <input
      type={type}
      name=""
      id=""
      className="filter"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Input;
