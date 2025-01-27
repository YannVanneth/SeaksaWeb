import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "./components/layouts/Rootlayout.jsx";
import CoursesPage from "./pages/CoursesPage.jsx";
import LoginPage from "./components/auths/LoginPage.jsx";
import RegisterPage from "./components/auths/RegisterPage.jsx";
import VerifyPage from "./components/auths/VerifyPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/courses",
        element: <CoursesPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage/>
      },
      {
      path: "/VerifyPage",
      element: <VerifyPage/>
      },
      {
        path: "/*",
        element: <div>404 Not Found</div>,
      },
    ],
  },
]);

// Render the application
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
