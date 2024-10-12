import React from "react";
import { SignIn } from "@clerk/clerk-react";

export default function Login() {
  return (
    <div className="w-fit mx-auto mt-20 ">
      <SignIn appearance={{
        elements:{
            footerActionLink: "hidden",
        },
      }} path="/sign-in" signUpUrl="null" />
      
      
    </div>
  );
}
