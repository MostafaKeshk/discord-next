import LoginForm from "@/modules/auth/Login/components/Form";

const Login = () => {
  return (
    <>
      <h1 className="text-5xl text-primary font-bold text-center py-5">
        Discord
      </h1>
      <h2 className="text-2xl text-primary font-bold text-center my-4">
        Welcome to Discord
      </h2>
      <LoginForm />
    </>
  );
};

export default Login;
