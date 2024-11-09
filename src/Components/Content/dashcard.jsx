import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

export default function DashCard() {


  return (
    <>
    <Link to={'Uploadfile'}>
      <div className="border-2 w-full">
        <div className="p-6 w-64 mx-auto bg-gray-100 rounded-lg shadow-md text-gray-800  hover:cursor-pointer">
          <h2 className="text-2xl font-semibold mb-2">Upload Papers</h2>
          <div className="mt-1 w-fit ml-auto ">
            <button className="bottom-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full ">
              <FiPlus className="text-xl text-gray-200 hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    </Link>
    </>
  );
}
