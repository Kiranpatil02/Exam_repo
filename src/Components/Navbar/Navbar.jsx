import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Navbar() {
  return (
    <>
      <div className="bg-gray-200 h-16 ">
        <div className="flex items-center border-2  justify-between h-full px-6 ">
          <div>
            <a
              className="text-blue-500 hover:text-blue-800 text-xl underline inline-flex flex items-center "
              href="https://intranet.cb.amrita.edu/" 
            >
              Intranet
              <span className="text-sm ">
              <MdOutlineArrowOutward />
              </span>
            </a>
          </div>
          <div>
            <h2 className="font-serif text-3xl">
              Amrita Institutional Repository
            </h2>
          </div>
          <div className="text-blue-700 hover:text-blue-800 hover:underline">
            <Link  to={"/sign-in"}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
