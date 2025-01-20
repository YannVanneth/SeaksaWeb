import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "./components/layouts/Rootlayout.jsx";

// Correctly define the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      // Define child routes here if needed
    ],
  },
]);

// Render the application
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
