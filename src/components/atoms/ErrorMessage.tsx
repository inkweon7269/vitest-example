import React from "react";

export interface IErrorMessageProps {
  children: string;
}

const ErrorMessage = ({ children }: IErrorMessageProps) => {
  return <p style={{ color: "red" }}>{children}</p>;
};

export default ErrorMessage;
