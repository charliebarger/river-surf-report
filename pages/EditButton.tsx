import React, { Children, PropsWithChildren } from "react";
import { Keys } from "react-hook-form/dist/types/path/common";

const varient = {
  controls:
    "bg-white text-blue-500 border-2 border-blue-500 hover:text-white hover:bg-blue-500 font-semibold py-1 px-2 rounded text-sm ",
};

interface EditButtonProps {
  handleClick: () => void;
  type: "button" | "submit" | "reset";
  buttonType: Keys<typeof varient>;
}

const Button = ({
  handleClick,
  children,
  buttonType,
  type,
}: PropsWithChildren<EditButtonProps>) => {
  return (
    <button className={varient[buttonType]} onClick={handleClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
