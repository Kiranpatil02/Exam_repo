import React from "react";
import { SignIn } from "@clerk/clerk-react";
import { IoMdArrowBack } from "react-icons/io";
import { dark } from '@clerk/themes'
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="ml-7 mt-5 w-fit">
        <span className="text-3xl">
          <Link to={"/"}>
            <IoMdArrowBack />
          </Link>
        </span>
      </div>
      <div className="w-fit mx-auto mt-10 ">
        <SignIn
          appearance={{
            baseTheme:dark,
            elements: {
              footerActionLink: "hidden",
            },
          }}
          path="/sign-in"
          signUpUrl="null"
        />
      </div>
    </>
  );
}
