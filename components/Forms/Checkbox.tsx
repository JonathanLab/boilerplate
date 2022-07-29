import InputWrapper from "./InputWrapper";
import { UseFormRegisterReturn } from "react-hook-form";

type CheckboxProps = {
  label?: string;
  register?: Partial<UseFormRegisterReturn>;
};

const Checkbox = ({ label, register }: CheckboxProps) => {
  return (
    <InputWrapper className="flex" label={label}>
      <input
        type="checkbox"
        className="
        mx-3
        rounded
        bg-gray-200
        border-transparent
        focus:border-transparent focus:bg-gray-200
        text-gray-700
        focus:ring-1 focus:ring-offset-2 focus:ring-gray-500
        "
        {...register}
      />
    </InputWrapper>
  );
};

export default Checkbox;
