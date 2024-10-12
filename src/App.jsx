import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Card from "./Components/Home/Card";
import Content from "./Components/Content/Content";
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


