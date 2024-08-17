import React, { ChangeEvent, MouseEvent } from "react";
import IconButton from "@/components/atoms/IconButton";
import ErrorMessage from "@/components/atoms/ErrorMessage";

interface ITextFieldProps {
  iconPath: string;
  alt: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  errorMessage: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isError: boolean;
  id: string;
}

const TextField = ({
  iconPath,
  alt,
  onClick,
  errorMessage,
  placeholder,
  onChange,
  value,
  isError,
  id,
}: ITextFieldProps) => {
  return (
    <div style={{ position: "relative" }}>
      <input
        id={id}
        placeholder={placeholder}
        value={value}
        type="text"
        onChange={onChange}
      />
      {value && <IconButton iconPath={iconPath} alt={alt} onClick={onClick} />}
      {isError && (
        <div style={{ position: "absolute" }}>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </div>
      )}
    </div>
  );
};

export default TextField;
