import { createBrowserRouter } from "react-router";
import HomeLayout from "./layout/HomeLayout";
import Popular_Products from "./component/Popular_Products";
import CoffeeAddLayout from "./layout/CoffeeAddLayout";
import { getCoffeeData } from "./services/crudApi";
// import Loader from "./layout/Loader";
const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Popular_Products,
        loader: () => getCoffeeData(),
        // loader: () => fetch("/coffeeItems.json"),
        // HydrateFallback: <Loader></Loader>,
      },
    ],
  },
  {
    path: "/add-coffee",
    element: <CoffeeAddLayout></CoffeeAddLayout>,
  },
  {
    path: "/edit-coffee/:id",
    element: <CoffeeAddLayout></CoffeeAddLayout>,
  },
]);

export default router;
