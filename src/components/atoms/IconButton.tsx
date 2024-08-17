import { MouseEvent } from "react";

interface IIconButtonProps {
  iconPath: string;
  alt: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const IconButton = ({ iconPath, alt, onClick }: IIconButtonProps) => {
  return (
    <button onClick={onClick}>
      <img src={iconPath} alt={alt} />
    </button>
  );
};

export default IconButton;
