export interface ILabelProps {
  children: string;
  htmlFor: string;
}

const Label = ({ children, htmlFor }: ILabelProps) => {
  return (
    <label htmlFor={htmlFor} style={{ color: "red" }}>
      {children}
    </label>
  );
};

export default Label;
