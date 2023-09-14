import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "../validations/register";
import * as z from "zod";
import { useToast } from "@/shared/components/ui/use-toast";
import useCallApi from "@/shared/hooks/useCallApi";
import AuthApi from "../apis";
import { IRegisterResponse } from "../types/register.type";
import { signIn } from "next-auth/react";

const useRegisterContainer = () => {
  const { toast } = useToast();
  const { callApi, loading } = useCallApi();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "Mostafa",
      email: "mostafa@admin.com",
      password: "123456",
      confirmPassword: "123456",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    callApi(AuthApi.register(values), async (data: IRegisterResponse) => {
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
    });
  };

  const handleSubmit = form.handleSubmit(onSubmit);

  return { form, handleSubmit, loading };
};

export default useRegisterContainer;
