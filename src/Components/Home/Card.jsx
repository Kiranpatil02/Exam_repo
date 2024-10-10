import React from "react";

export default function Card({number}) {
  return (
    <div>
      <div className="border  w-64 shadow-md flex justify-center items-center  rounded-xl  h-36 transition ease-in-out   hover:scale-105 cursor-pointer">
        <h2 className="text-xl font-bold">Semester-{number}</h2>
      </div>
    </div>
  );
}
