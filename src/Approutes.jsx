import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layout";
import { EditTax, Home, MyTask, NewTask } from "./pages";

const Approutes = () => {
  const routes = [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/mytask",
          element: <MyTask />,
        },
        {
          path: "/edittask",
          element: <EditTax />,
        },
        {
          path: "/newtask",
          element: <NewTask />,
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Approutes;
