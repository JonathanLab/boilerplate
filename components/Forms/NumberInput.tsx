import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import InputWrapper from "./InputWrapper";

type NumberInputProps = {
  label?: string;
  placeholder?: string;
  decimal?: boolean;
  required?: boolean;
  readonly?: boolean;
  register: Partial<UseFormRegisterReturn>;
};

const NumberInput = ({
  label,
  decimal = false,
  required = false,
  readonly = false,
  register,
  placeholder,
}: NumberInputProps) => {
  return (
    <InputWrapper label={label}>
      <input
        type="number"
        required={required}
        readOnly={readonly}
        step={decimal ? 0.01 : 0}
        className="
        mt-1
        block
        w-full
        rounded-md
        bg-gray-100
        border-transparent
        focus:border-gray-500 focus:bg-white focus:ring-0
        "
        placeholder={placeholder}
        {...register}
      />
    </InputWrapper>
  );
};

export default NumberInput;
