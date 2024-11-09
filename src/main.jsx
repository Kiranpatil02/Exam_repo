import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Content from "./Components/Content/Content.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import config from "./config/config.js";
import Login from "./Components/Login/Login.jsx";
import Dashboard from "./Components/Content/Dashboard.jsx";
import UploadFile from "./Components/User/Upload.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/semester/:id",
        element: <Content />,
      },
      {
        path: "/sign-in/*",
        element: <Login />,
      },
      {
        path: "/Dashboard",
        element: <Dashboard />,
      },
      {
        path:"/Dashboard/Uploadfile",
        element:<UploadFile/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={config.clerk_key}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
