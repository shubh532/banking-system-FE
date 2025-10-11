import { createBrowserRouter } from "react-router";
import Login from "../auth/Login";
import CreateAccount from "../auth/CreateAccount";
import Dashboard from "../components/dashboard/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "auth",
    children: [
      { path: "login", Component: Login },
      { path: "create-account", Component: CreateAccount },
    ],
  },
  {
    path: "dashboard",
    Component:Dashboard
  },
]);

export default router