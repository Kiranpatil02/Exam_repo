import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar/>
          <Outlet/>
      </div>
    </>
  );
}


