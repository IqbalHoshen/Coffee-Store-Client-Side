import { createBrowserRouter } from "react-router";
import HomeLayout from "./layout/HomeLayout";
import Popular_Products from "./component/Popular_Products";
// import Loader from "./layout/Loader";
const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Popular_Products,
        loader: () => fetch("/coffeeItems.json"),
        // HydrateFallback: <Loader></Loader>,
      },
    ],
  },
]);

export default router;
