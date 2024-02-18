import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Cancel from "./pages/Cancel";
import Success from "./pages/Success";
import Contact from "./pages/Contact";
import CheckOut from "./pages/CheckOut";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products",
      element: <ProductPage />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/success",
      element: <Success />,
    },
    {
      path: "/denied",
      element: <Cancel />,
    },
    {
      path: "/checkout",
      element: <CheckOut />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
