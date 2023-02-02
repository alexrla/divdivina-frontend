import { createBrowserRouter } from "react-router-dom";

// pages
import Home from "./pages/Home";
import OrderType from "./pages/OrderType";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/order-type",
    element: <OrderType />
  },
])

export default router;
