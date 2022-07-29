import InputWrapper from "./InputWrapper";
import { UseFormRegisterReturn } from "react-hook-form";

type DateProps = {
  label?: string;
  register: Partial<UseFormRegisterReturn>;
};

const Date = ({ label, register }: DateProps) => {
  return (
    <InputWrapper label={label}>
      <input
        type="date"
        className="
        mt-1
        block
        w-full
        rounded-md
        bg-gray-100
        border-transparent
        focus:border-gray-500 focus:bg-white focus:ring-0
        "
        {...register}
      />
    </InputWrapper>
  );
};

export default Date;
