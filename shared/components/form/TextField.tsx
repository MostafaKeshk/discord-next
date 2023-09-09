import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { UseFormReturn } from "react-hook-form";

type IProps = {
  form: UseFormReturn<any, any, undefined>;
  name: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "password";
  className?: string;
};

const TextField: React.FC<IProps> = ({
  form,
  name,
  label,
  placeholder = "",
  type = "text",
  className = "",
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextField;
