import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Azure/data";
import serv from "../../Azure/Storage";
import { BsFilePdf } from "react-icons/bs";

export default function Content() {
  const [courses, setcourses] = useState([]);
  const [year, setyear] = useState("2024");
  const [available, setavailable] = useState({});

  const handleyear = (e) => {
    setyear(e.target.value);
  };

  const { id } = useParams();

  useEffect(() => {
    db.fetchDocuments(id).then((e) => {
      setcourses(e);
      e.forEach((course) => {
        checkfileavailable(course, year, "quiz1");
        checkfileavailable(course, year, "quiz2");
        checkfileavailable(course, year, "quiz3");
        checkfileavailable(course, year, "midterm");
      });
    });
  }, [year]);

  const checkfileavailable = async (course, year, examname) => {
    try {
      await serv.getfile(course, year, examname).then((e) => {
        if (e) {
          setavailable((prev) => ({
            ...prev,
            [`${course}-${examname}`]: true,
          }));
        } else {
          setavailable((prev) => ({
            ...prev,
            [`${course}-${examname}`]: false,
          }));
        }
      });
    } catch (e) {
      console.log("Failed ", e);
    }
  };

  const handledownload = async (course, year, examname) => {
    await serv.getfile(course, year, examname).then((e)=>serv.downloadfile(e,id))
  };

  return (
    <>
      <div> 
        <div className="mt-5 flex lg:gap-10   border-2  justify-center items-center">
          <div>
            <label className="text-lg lg:text-xl">
              Department
            </label>
            <select className=" lg:ml-2 w-28 lg:w-32 rounded-md border h-12 rounded-md hover:outline-none">
              <option value="US">Computer Science and AIE</option>
            </select>
          </div>
          <div>
            <label  className="text-lg lg:text-xl">
              Course
            </label>

            <select className="lg:ml-2 w-28 lg:w-32 rounded-md border h-12 rounded-md w-40 hover:outline-none">
              {courses.map((coursename) => (
                <>
                  <option>{coursename}</option>
                </>
              ))}
            </select>
          </div>
          <div>
            <label  className="text-lg lg:text-xl">
              Year
            </label>
            <select
              className="lg:ml-2  w-fit lg:w-32 rounded-md border h-12 rounded-md w-40 hover:outline-none"
              onChange={handleyear}
            >
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-2xl mt-40 p-1">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-black p-2">Course Code</th>
              <th className="border border-black w-24 ">Quiz 1</th>
              <th className="border border-black w-24">Quiz 2</th>
              <th className="border border-black w-24">Quiz 3</th>
              <th className="border border-black w-24">Midterm</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((name, index) => (
              <tr  className="border border-black ">
                <td key={index} className="border border-black p-2 text-center">{name}</td>
            
                <td
                  className={`border border-black p-2 text-center ${
                    available[`${name}-quiz1`] ? "hover:cursor-pointer" : ""
                  }`}
                  onClick={() =>
                    available[`${name}-quiz1`] &&
                    handledownload(name, year, "quiz1")
                  }
                >
                  {available[`${name}-quiz1`] ? <BsFilePdf /> : <i>NA</i>}
                </td>
                <td
                  className={`border border-black p-2 text-center ${
                    available[`${name}-quiz2`] ? "hover:cursor-pointer" : ""
                  }`}
                  onClick={() =>
                    available[`${name}-quiz2`] &&
                    handledownload(name, year, "quiz2")
                  }
                >
                  {available[`${name}-quiz2`] ? <BsFilePdf /> : <i>NA</i>}
                </td>
                <td
                  className={`border border-black p-2 text-center ${
                    available[`${name}-quiz3`] ? "hover:cursor-pointer" : ""
                  }`}
                  onClick={() =>
                    available[`${name}-quiz3`] &&
                    handledownload(name, year, "midterm")
                  }
                >
                  {available[`${name}-quiz3`] ? <BsFilePdf /> : <i>NA</i>}
                </td>
                <td
                  className={`border border-black p-2 text-center ${
                    available[`${name}-midterm`] ? "hover:cursor-pointer" : ""
                  }`}
                  onClick={() =>
                    available[`${name}-midterm`] &&
                    handledownload(name, year, "midterm")
                  }
                >
                  {available[`${name}-midterm`] ? <BsFilePdf /> : <i>NA</i>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
