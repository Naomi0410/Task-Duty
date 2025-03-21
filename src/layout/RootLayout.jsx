import { Outlet } from "react-router-dom";
import { Nav } from "../components";

const RootLayout = () => {
  return (
    <div className="w-full mx-auto 2xl:container">
      <Nav />
      <Outlet />
    </div>
  );
};

export default RootLayout;
