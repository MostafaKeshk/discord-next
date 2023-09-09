"use client";

import { Button } from "@/shared/components/ui/button";
import { signOut } from "next-auth/react";

const AuthButton = () => {
  return <Button onClick={() => signOut()}>Sign out</Button>;
};

export default AuthButton;
