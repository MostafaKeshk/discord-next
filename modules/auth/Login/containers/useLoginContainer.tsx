import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "../validations/login";
import * as z from "zod";
import { signIn } from "next-auth/react";
import { useToast } from "@/shared/components/ui/use-toast";

const useLoginContainer = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await signIn("credentials", {
        ...values,
        redirect: true,
        callbackUrl: "/",
      });
    } catch (error: any) {
      console.log(error);
      toast({
        title: "Success",
        description: "You are now logged in",
      });
    }

    // console.log(values);
  };

  const handleSubmit = form.handleSubmit(onSubmit);

  return { form, handleSubmit };
};

export default useLoginContainer;
