import RegisterForm from "@/modules/auth/components/RegisterForm";
import { paths } from "@/routes/paths";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <h1 className="text-5xl text-primary font-bold text-center py-5">
        Threads
      </h1>
      <h2 className="text-2xl text-primary font-bold text-center my-4">
        Welcome to Threads
      </h2>
      <RegisterForm />
      <Link href={paths.login} className="mt-2">
        Login
      </Link>
    </>
  );
};

export default Login;
