import { createBrowserRouter } from "react-router-dom";

// pages
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])

export default router;
