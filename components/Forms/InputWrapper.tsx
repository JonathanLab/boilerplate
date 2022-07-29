import clsx from "clsx";
import React from "react";

type InputWrapperProps = {
  className?: string;
  label?: string;
  children: React.ReactNode;
};

const InputWrapper = ({ className, label, children }: InputWrapperProps) => {
  return (
    <div>
      <label className={clsx("text-gray-800 mb-1", className)}>
        <span>{label}</span>
        {children}
      </label>
    </div>
  );
};

export default InputWrapper;
