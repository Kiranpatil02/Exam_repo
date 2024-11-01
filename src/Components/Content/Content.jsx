import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "C:/Users/Kiran Patil/Desktop/Cloud computing/End-sem/Exam_repo/src/Azure/data.js";
import serv from "../../Azure/storage";
import { BsFilePdf } from "react-icons/bs";

export default function Content() {
  const [courses, setcourses] = useState([]);
  const [year, setyear] = useState();

  const handleyear = (e) => {
    setyear(e.target.value);
  };

  // const handleclick = async (coursename,year) => {
  //   await serv.getfile(coursename, year);
  // };

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    console.log(serv.listfiles());
    db.fetchDocuments(id).then((e) => {
      setcourses(e);
    });
  }, []);

  return (
    <>
      <div>
        <div className="mt-5 flex gap-10  justify-center items-center">
          <div>
            <label className="text-xl" htmlFor="">
              Department
            </label>
            <select className=" ml-2 w-32 rounded-md border h-12 rounded-md hover:outline-none">
              <option value="US">Computer Science and AIE</option>
            </select>
          </div>
          <div>
            <label htmlFor="" className="text-xl">
              Course
            </label>

            <select className=" ml-2 w-32 rounded-md border h-12 rounded-md w-40 hover:outline-none">
              {courses.map((coursename) => (
                <>
                  <option>{coursename}</option>
                </>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="" className="text-xl">
              Year
            </label>
            <select
              className="ml-2 w-32 rounded-md border h-12 rounded-md w-40 hover:outline-none"
              onChange={handleyear}
            >
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-lg mt-40 p-1">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-black p-2">Course Code</th>
              <th className="border border-black w-24 ">Quiz 1</th>
              <th className="border border-black w-24">Quiz 2</th>
              <th className="border border-black w-24">Midterm</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((name, index) => (
              <tr key={index} className="border border-black ">
                <td className="border border-black p-2 text-center">{name}</td>
                {/* <td className="border border-black p-2 text-center hover:cursor-pointer">
                  {handleclick(name,year) ? <BsFilePdf /> : <i>NA</i>}
                </td>
                <td className="border border-black p-2 text-center hover:cursor-pointer">
                  {handleclick(name,year)? <BsFilePdf /> : <i>NA</i>}
                </td>
                <td className="border border-black p-2 text-center hover:cursor-pointer">
                  {handleclick(name,year) ? <BsFilePdf /> : <i>NA</i>}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
