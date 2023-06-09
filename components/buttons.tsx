"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const SignInButton = () => {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status == "loading") {
    return <>...</>;
  }

  if (status == "authenticated") {
    return <Link href={`/dashboard`}>Logged In</Link>;
  }

  return <button onClick={() => signIn()}>Sign In</button>;
};

const SignOutButton = () => {
  return <button onClick={() => signOut()}>Sign Out</button>;
};

export { SignInButton, SignOutButton };
