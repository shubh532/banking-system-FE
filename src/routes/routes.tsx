import { createBrowserRouter } from "react-router";
import Login from "../auth/Login";
import CreateAccount from "../auth/CreateAccount";
import Dashboard from "../components/dashboard/Dashboard";
import DashboardLayout from "../components/dashboard/DashboardLayout";

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
    Component: DashboardLayout,
    children: [{
      index:true, Component: Dashboard
    }],

  },
]);

export default router