import { createBrowserRouter } from "react-router";
import HomeLayout from "./layout/HomeLayout";
import Popular_Products from "./component/Popular_Products";
import CoffeeAddLayout from "./layout/CoffeeAddLayout";
import { getCoffeeData, getCoffeeDataByID } from "./services/crudApi";
import CoffeeView from "./layout/CoffeeView";
import CoffeeViewDetails from "./component/CoffeeViewDetails";
import Error404 from "./layout/Error404";
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
  {
    path: "/view-coffee/",
    element: <CoffeeView></CoffeeView>,

    children: [
      {
        path: ":id",
        element: <CoffeeViewDetails></CoffeeViewDetails>,
        loader: ({ params }) => getCoffeeDataByID(params.id),
      },
    ],
  },

  { path: "*", element: <Error404></Error404> },
]);

export default router;
