import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CoursesPage from "./pages/view/CoursesPage.jsx";
import AboutUsPage from "./pages/view/AboutUsPage.jsx";
import DetailPage from "./pages/view/DetailPage.jsx";
import Rootlayout from "./components/layouts/Rootlayout.jsx";
import CourseManagement from "./pages/admin/CourseManagement.jsx";
import Root from "./components/adminUi/Root.jsx";
import AddCourse from "./pages/admin/AddCourse.jsx";
import Resgister from "./components/auth/Resgister.jsx";
import { OTP } from "./components/auth/OTP.jsx";
import LoginForm from "./components/auth/LoginForm.jsx";
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
        path: "/about",
        element: <AboutUsPage />,
      },
      {
        path: "/detailpage/:id",
        element: <DetailPage />,
      },

      {
        path: "/*",
        element: <div>404 Not Found</div>,
      },
    ],
  },
  {
    path: "/register",
    element: <Resgister />,
  },
  {
    path: "/otp", // Fixed this
    element: <OTP />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/admin",
    element: <Root />,
    children: [
      {
        path: "/admin/",
        element: <CourseManagement />,
      },
      {
        path: "/admin/addcourse",
        element: <AddCourse />,
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
