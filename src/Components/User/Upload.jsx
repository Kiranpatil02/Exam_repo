import React, { useState } from "react";
import { FaFileUpload } from "react-icons/fa";
import { IoArrowBackSharp } from "react-icons/io5";
import serv from "../../Azure/storage";

export default function UploadFile() {
  const [filename, setfilename] = useState("");
  const [file,setfile]= useState(null);
  const [success,setsuccess]=useState(false)

  const hadnleFilechange = (e) => {
    const selectedfile = e.target.files[0];
    console.log(selectedfile,"THi sis")
    if (selectedfile) {
      setfilename(selectedfile.name);
      setfile(selectedfile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setfilename(droppedFile.name);
    setfile(droppedFile);
  };

  const handleSubmit= (e)=>{
    e.preventDefault();

    const formdata=new FormData();
    formdata.append("file",file);
    serv.upload(file);
    setsuccess(true);

  }

  return (
    <>
      <div className="text-3xl absolute mt-5 w-fit ml-10 hover:cursor-pointer">
        <IoArrowBackSharp />
      </div>
      <div className="mt-10 mx-auto border w-1/3 max-w-xl rounded-lg">
        <form className="py-6 px-9" onSubmit={handleSubmit}>
          <div class="mb-5  flex justify-center gap-10 px-2">
            <div>
              <label
                for="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Select Semester
              </label>
              <select className="ml-2 w-28 rounded-md border h-12 rounded-md  outline-none">
                <option>Semester-1</option>
                <option>Semester-2</option>
                <option>Semester-3</option>
              </select>
            </div>
            <div>
              <label
                for="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Select Course
              </label>
              <select className="ml-2 w-28 rounded-md border h-12 rounded-md  outline-none">
                <option>Semester-1</option>
                <option>Semester-2</option>
                <option>Semester-3</option>
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
                  onClick={() => setfilename("")}
                >
                  <h2>Drop</h2>
                </div>
                <div className="flex justify-center gap-10 mt-5">
                  <div className="flex">
                    <label
                      for="email"
                      className="mb-3 block text-lg font-medium  text-[#07074D]"
                    >
                      Exam name
                    </label>
                    <select className="ml-2 w-28 rounded-md border h-8 rounded-md  outline-none">
                      <option>quiz-1</option>
                      <option>quiz-2</option>
                      <option>quiz-3</option>
                      <option>midterm</option>
                    </select>
                  </div>
                  <div className="flex">
                    <label
                      for="email"
                      className="mb-3 block text-lg font-medium  text-[#07074D]"
                    >
                      Year
                    </label>
                    <select className="ml-2 w-28 rounded-md border h-8 rounded-md  outline-none">
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
                  className="sr-only"
                />
                <label
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}

                  for="file"
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
          </div>

          <div>{
              (success)? 
              <h2>File uploaded 🚀🚀</h2> :
              <button type="submit" className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Send File
            </button>

            }
            
          </div>
        </form>
      </div>
    </>
  );
}
