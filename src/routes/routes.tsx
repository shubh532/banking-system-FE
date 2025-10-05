import { createBrowserRouter } from "react-router";
import Login from "../auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "auth",
    children: [
      { path: "login", Component: Login },
    ],
  },
]);

export default router