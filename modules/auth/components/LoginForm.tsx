"use client";

import { Form } from "@/shared/components/ui/form";
import { Button } from "@/shared/components/ui/button";
import TextField from "@/shared/components/form/TextField";
import useLoginContainer from "../containers/useLoginContainer";

const LoginForm = () => {
  const { form, handleSubmit } = useLoginContainer();
  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="w-full">
        <TextField form={form} name="email" label="Email" className="mb-2" />
        <TextField
          form={form}
          name="password"
          label="Password"
          type="password"
          className="mb-2"
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
