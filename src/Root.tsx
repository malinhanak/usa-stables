import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAuth } from "./context/auth";

function Root() {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);
  return (
    <div>
      <ToastContainer autoClose={8000} />
      <Outlet />
    </div>
  );
}

export default Root;
