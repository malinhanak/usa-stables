import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Root from "./Root.tsx";
import App from "./App.tsx";
import { AuthProvider } from "./context/auth/provider.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <>Ooops</>,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "info",
        element: <Outlet />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
