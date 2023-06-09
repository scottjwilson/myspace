import { getServerSession } from "next-auth";

const SecretPage = async () => {
  const session = await getServerSession();
  console.log(session);
  return (
    <div>
      <h1>Secret Page</h1>
      <p>For your eyes only, {session?.user?.name}</p>
    </div>
  );
};

export default SecretPage;
