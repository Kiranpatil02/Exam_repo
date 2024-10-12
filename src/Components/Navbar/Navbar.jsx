import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="bg-gray-200 h-16 ">
        <div className="flex items-center border-2  justify-between h-full px-6 ">
          <div>
            <a
              className="text-blue-500 text-xl underline"
              href="https://intranet.cb.amrita.edu/"
            >
              Intranet
            </a>
          </div>
          <div>
            <h2 className="font-mono text-3xl">
              Amrita Institutional Repository
            </h2>
          </div>
          <div className="text-blue-700">
            <Link  to={"/sign-in"}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
