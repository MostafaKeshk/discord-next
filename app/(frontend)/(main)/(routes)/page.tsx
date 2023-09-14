import AuthButton from "@/modules/auth/AuthButton";
import { getServerSession } from "@/modules/auth/utils/getServerSession";
import { getData } from "@/modules/home/api";

const Home = async () => {
  const session = await getServerSession();

  if (!session) return null;
  const data: any = await getData(1, session.token);
  console.log(data);
  return (
    <div>
      {data.rows.map((item: any) => (
        <h1 key={item._id}>{item.total}</h1>
      ))}
      <AuthButton />
    </div>
  );
};

export default Home;
