import React from "react";
import { Link } from "react-router-dom";

export default function Card({number}) {
  return (
    <Link to={`/semester-`}>
    <div>
      <div className="border  w-64 shadow-md flex justify-center items-center  rounded-xl  h-36 transition ease-in-out   hover:scale-105 cursor-pointer">
        <h2 className="text-xl font-bold">Semester-{number}</h2>
      </div>
    </div>
    </Link>
  );
}