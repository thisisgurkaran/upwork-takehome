import { Field, ErrorMessage } from "formik";

export interface formFieldProps {
  name: string;
  type: string;
  className?: string;
  placeholder?: string;
  title?: string;
  as?: string;
  disabled?: boolean;
  renderError?: (errorMessage: string) => React.ReactNode;
  onChange?: (e: any) => void;
  value?: string;
  maxLength?: string;
}

const CustomInput: React.FC<formFieldProps> = ({
  name,
  type,
  className,
  placeholder,
  renderError,
  as,
  title,
  disabled = false,
  children,
  maxLength,
  ...props
}) => {
  return (
    <div className="my-10">
      <p className="w-309 text-tiny text-left font-normal mb-10 text-title">
        {title}
      </p>
      <Field
        as={as}
        disabled={disabled}
        className={className}
        name={name}
        type={type}
        children={children}
        maxLength={maxLength}
        placeholder={placeholder}
      />
      <ErrorMessage name={name} render={renderError} />
    </div>
  );
};

export default CustomInput;
