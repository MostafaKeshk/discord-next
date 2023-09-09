import AuthButton from "@/modules/auth/AuthButton";
import { getServerSession } from "next-auth";

const Home = async () => {
  const session = await getServerSession();
  console.log(session);
  return (
    <div>
      <p>Protected Route</p>
      <AuthButton />
    </div>
  );
};

export default Home;
