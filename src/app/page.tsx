"use client";

import { UserButton } from "@/features/auth/components/user-button";
// import { useAuthActions } from "@convex-dev/auth/react";

// import { AuthScreen } from "@/features/auth/components/auth-screen";

export default function Home() {
  // return <AuthScreen/>;
  return (
    <div>
      Logged In
      <UserButton />
    </div>
  );
}
