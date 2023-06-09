import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const SecretPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <div>
      <h1>Secret Page</h1>
      <p>For your eyes only, {session?.user?.name}</p>
    </div>
  );
};

export default SecretPage;
