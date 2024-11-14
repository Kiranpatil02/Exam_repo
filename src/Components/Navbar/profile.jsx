import React from "react";
import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function Profile() {
  const { user } = useUser();
  return (
    <>
    <Link to={'/Dashboard'}>
      <div class="flex items-center gap-1 hover:cursor-pointer ">
        <p className="text-gray-700">{user.username}</p>
        <div className="flex items-center justify-center w-9 h-9  rounded-full bg-blue-500 text-white font-bold"></div>
      </div>
    </Link>
    </>
  );
}
