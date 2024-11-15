import React, { useEffect, useState } from "react";
import { FaFileUpload } from "react-icons/fa";
import { IoArrowBackSharp } from "react-icons/io5";
import serv from "../../Azure/Storage.js";
import db from "../../Azure/data";
import { Link } from "react-router-dom";

export default function UploadFile() {
  const [filename, setfilename] = useState("");
  const [file,setfile]= useState(null);
  const [success,setsuccess]=useState(false)
  const [courses, setcourses] = useState([]);
  const [semeseter,setsemester]=useState(1);
  const [coursename,setcoursename]=useState("")
  const [year, setyear] = useState("2024");
  const [examtype, setexamtype] = useState("quiz-1");
  useEffect(()=>{
    db.fetchDocuments(semeseter).then((e)=>{
      setcourses(e)
    })

  },[semeseter])

  useEffect(() => {
    if (courses.length > 0) {
      setcoursename(courses[0]); 
    }
  }, [courses]);

  const hadnleFilechange = (e) => {
    const selectedfile = e.target.files[0];
    if (selectedfile) {
      setfilename(selectedfile.name);
      setfile(selectedfile);
    }
  };

  const handleSubmit= (e)=>{
    e.preventDefault();

    if (!file) {

      return; 
    }

    const formdata=new FormData();
    formdata.append("file",file);
    serv.upload(file,coursename,year,examtype,semeseter).then(()=>{
      setsuccess(true);
      
    }).catch(()=>console.log("Failed"))

  }

  function generatesemesters(){
    return Array.from({length:7},(_,i)=>(
      <option key={i}>{i+1}</option>
    ))
  }

   const handlesemester=(e)=>{
    setsemester(e.target.value)
  }

  const handlecourse=(e)=>{
    setcoursename(e.target.value);
  }
  const handleexamtype = (e) => {
    setexamtype(e.target.value);
  };
  const handleyear = (e) => {
    setyear(e.target.value); 
  };
  const handleReset = () => {
    setfilename("");
    setfile(null);
    setsuccess(false);
  };
  
  return (
    <>
      <div  className="text-3xl absolute mt-5 w-fit ml-2 md:ml-9 hover:cursor-pointer">
        <Link to={"/"}>
        <IoArrowBackSharp />
        </Link>
      </div>
      {
        success?(
          <>
          <div className="mx-auto  w-96 mt-20">

          <div className="py-6 px-9">
          <h2 className="text-center text-xl font-semibold text-green-600">
            File uploaded successfully! 🚀🚀
          </h2>
        </div>
        <div className="mx-auto w-fit">

        <button
        onClick={handleReset}
        className="hover:shadow-form  rounded-md bg-[#6A64F1] hover:bg-purple-500 py-2 px-6 text-center text-base font-semibold text-white outline-none"
        >
        Upload Again
      </button>
          </div>
        </div>
      </>

        ):
        (
          <div className="mt-20 mx-auto border w-80 md:w-1/2 max-w-xl rounded-lg">
        <form className="px-4 py-5  md:py-6  md:px-9 py-9 " onSubmit={handleSubmit}>
          <div class="mb-5  flex  justify-center gap-5   md:gap-10 px-2">
            <div>
              <label
                className=" md:mb-2 block text-sm md:text-base font-medium text-[#07074D]"
              >
                Select Semester 
              </label>
              <select onChange={handlesemester} className="ml-2 w-12 rounded-md border h-8 rounded-md  outline-none">
               {generatesemesters()}
              </select>
            </div>
            <div>
              <label
                className="md:mb-2 block text-sm md:text-base font-medium text-[#07074D]"
              >
                Select Course
              </label>
              <select onChange={handlecourse}  className="md:ml-2 w-32 h-9 text-sm md:w-44 rounded-md border md:h-10 rounded-md  outline-none">
                {
                  courses.map((e,index)=>(
                    <option key={index}>{e}</option>
                  ))
                }
              </select>
            </div>
          </div>
          <div>
            {filename && (
              <>
                <h2 className="border px-3 text-lg border-dashed border-black w-fit">
                  {" "}
                  {filename}
                </h2>
                <div
                  className="border w-fit bg-red-600 px-2 rounded mt-2 text-white hover:cursor-pointer"
                  onClick={() =>{
                    setfilename("");
                    setfile(null);

                  }}
                >
                  <h2>Drop</h2>
                </div>
                <div className="flex justify-center md:gap-10 mt-5">
                  <div className="flex flex-wrap">
                    <label
                      for="email"
                      className="md:mb-3 block text-md md:text-lg font-medium  text-[#07074D]"
                    >
                      Exam name
                    </label>
                    <select onChange={handleexamtype}  className="ml-2 w-28 rounded-md border h-8 rounded-md  outline-none">
                      <option>quiz-1</option>
                      <option>quiz-2</option>
                      <option>quiz-3</option>
                      <option>midterm</option>
                    </select>
                  </div>
                  <div className="flex flex-wrap">
                    <label
                      for="email"
                      className="md:mb-3 block text-md md:text-lg font-medium  text-[#07074D]"
                    >
                      Year
                    </label>
                    <select onChange={handleyear} className=" w-20 ml-2 md:w-28 rounded-md border h-8 rounded-md  outline-none">
                      <option>2024</option>
                      <option>2023</option>
                      <option>2022</option>
                    </select>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="mb-6 pt-4">
            <label className="mb-5 block text-xl font-semibold text-[#07074D]">
              Upload File
            </label>


              <div className="mb-8">
                <input
                  onChange={hadnleFilechange}
                  type="file"
                  name="file"
                  accept=".pdf"
                  id="file-input"
                  className="sr-only"
                />
                <label
                  for="file"
                   htmlFor="file-input"
                  className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                >
                  <div>
                    <span className="mb-2 block text-xl font-semibold text-[#07074D] ">
                      Drop files here
                      <FaFileUpload className="mx-auto" />
                    </span>
                    <span className="mb-2 block text-base font-medium text-[#6B7280]">
                      Or
                    </span>
                    <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                      Browse
                    </span>
                  </div>
                </label>
              </div>
              <button disabled={!file} type="submit" className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Send File
            </button>
          </div>
        </form>     
      </div>
        )
      }
    </>
  );
}
