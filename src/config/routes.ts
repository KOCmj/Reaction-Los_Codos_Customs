import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Vehicles from "../pages/Vehicles";

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
}

const routes: RouteType[] = [
  {
    path: "",
    component: Home,
    name: "Home Screen", 
  },
  {
    path: "/dashboard",
    component: Dashboard,
    name: "Dashboard",
  }, 
  {
        path: "/vehicles",
        component: Vehicles,
        name: "Vehicles",
    }
];

export default routes