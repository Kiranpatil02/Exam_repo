import React from "react";
import DashCard from "./dashcard";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
export default function Dashboard() {
  return (
    <>
      <div className="text-3xl absolute mt-5 w-fit ml-10 hover:cursor-pointer">
        <Link to={"/"}>
          <IoArrowBackSharp />
        </Link>
      </div>
      <div className="flex flex-wrap gap-20 gap-y-10   justify-center w-full items-center  mt-20">
        <DashCard />
      </div>
    </>
  );
}
