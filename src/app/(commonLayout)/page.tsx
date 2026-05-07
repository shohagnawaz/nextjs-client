import { authClient } from "@/lib/auth-client";

export default async function Home() {

  const session = await authClient.getSession();

  return (
    <div>
      
    </div>
  );
}
