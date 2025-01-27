import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "./components/layouts/Rootlayout.jsx";
import CoursesPage from "./pages/CoursesPage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import MyLearningPage from "./pages/MyLearning.jsx";

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
        path: "/mylearning",
        element: <MyLearningPage />,
      },
      {
        path: "/about",
        element: <AboutUsPage />,
      },
      {
        path: "/detailpage",
        element: <DetailPage />,
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
