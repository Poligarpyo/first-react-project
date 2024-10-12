import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/hero/Home";
import Features from "../pages/features/Features";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/features", element: <Features /> },
]);
