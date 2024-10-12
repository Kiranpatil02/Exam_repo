import React from "react";

export default function Content() {
  return (
    <>
    <div>
      <div className="mt-5 flex gap-10  justify-center items-center">
        <div>
          <label className="text-xl" htmlFor="">
            Department
          </label>
          <select class=" ml-2 w-32 rounded-md border h-12 rounded-md hover:outline-none">
            <option value="US" className="">
              Computer Science and AIE
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="" className="text-xl">
            Course
          </label>
          <select class=" ml-2 w-32 rounded-md border h-12 rounded-md w-40 hover:outline-none">
            <option value="US" className="f">
              Elements of Computing
            </option>
            <option value="US" className="f">
              Mathematics for Computing
            </option>
            <option value="US" className="f">
              Discrete Mathematics
            </option>
          </select>
          
        </div>
        <div>
          <label htmlFor="" className="text-xl">Year</label>
          <select className="ml-2 w-32 rounded-md border h-12 rounded-md w-40 hover:outline-none" name="" id="">
          <option value="US" className="f">
              2024
            </option>
            <option value="US" className="f">
              2023
            </option>
            <option value="US" className="f">
              2022
            </option>
          </select>
        </div>
      </div>
    </div>
    <div className="mx-auto w-full max-w-lg mt-40 p-4">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-black p-2">Course Code</th>
            <th className="border border-black p-2">Quiz 1</th>
            <th className="border border-black p-2">Quiz 2</th>
            <th className="border border-black p-2">Midterm</th>
            <th className="border border-black p-2">Final Exam</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black p-2">22AIEDL110201</td>
            <td className="border border-black p-2 text-center">
              <i className="fas fa-file"></i>
            </td>
            <td className="border border-black p-2 text-center">
              <i className="fas fa-file"></i>
            </td>
            <td className="border border-black p-2 text-center">
              <i className="fas fa-file"></i>
            </td>
            <td className="border border-black p-2 text-center">
              <i className="fas fa-file"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
}
