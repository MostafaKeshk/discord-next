import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "../validations/login";
import * as z from "zod";
import { signIn } from "next-auth/react";
import { useToast } from "@/shared/components/ui/use-toast";
import { useState } from "react";

const useLoginContainer = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "mostafa@admin.com",
      password: "123456",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      await signIn("credentials", {
        ...values,
        redirect: true,
        callbackUrl: "/",
      });
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      toast({
        title: "Success",
        description: "You are now logged in",
      });
      setLoading(false);
    }

    // console.log(values);
  };

  const handleSubmit = form.handleSubmit(onSubmit);

  return { form, handleSubmit, loading };
};

export default useLoginContainer;
