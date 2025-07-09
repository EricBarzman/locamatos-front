"use client";

import useUserStore from "@/store/userStore";

export default function Home() {

  const user = useUserStore();
  
  return (
    <div className="p-125">
      Bonjour, {user.username}
    </div>
  );
}
