import "./App.css";
import HomePages from "./pages/view/HomePages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CoursesPage from "./pages/view/CoursesPage.tsx";
import AboutUsPage from "./pages/view/AboutUsPage.jsx";
import DetailPage from "./pages/view/DetailPage.jsx";
import Rootlayout from "./components/layouts/Rootlayout.jsx";
import CourseManagement from "./pages/admin/CourseManagement.jsx";
import Root from "./components/adminUi/Root.jsx";
import AddCourse from "./pages/admin/AddCourse.jsx";
import Resgister from "./components/auth/Resgister.jsx";
import { OTP } from "./components/auth/OTP.jsx";
import LoginForm from "./components/auth/LoginForm.jsx";
import MyLearningPage from "./pages/view/MyLearning.jsx";
import AskingAi from "./pages/view/AskingAi.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      {
        path: "/",
        element: <HomePages />,
      },
      {
        path: "/courses",
        element: <CoursesPage />,
      },
      {
        path: "/mylearning",
        element: <MyLearningPage />,
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
        path: "/askingai",
        element: <AskingAi />,
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

function App() {
  return (
    <div className="dark:bg-primaryDark bg-white ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
