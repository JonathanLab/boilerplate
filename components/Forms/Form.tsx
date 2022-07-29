import {
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";

type FormProps<TFormValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  onError: SubmitErrorHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
};

const Form = <TFormValues extends Record<string, unknown>>({
  onSubmit,
  onError,
  children,
}: FormProps<TFormValues>) => {
  // TODO: Use typescript schema validation on top of HTML validation (with Yup or Zod)
  const methods = useForm<TFormValues>();

  return (
    <form
      className="flex-col space-y-4"
      onSubmit={methods.handleSubmit(onSubmit, onError)}
    >
      {children(methods)}
    </form>
  );
};

export default Form;
