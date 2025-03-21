import { NavLink, useLocation } from "react-router-dom";
import { logo, profileImg } from "../assets";

const Nav = () => {
  const location = useLocation();
  return (
    <div className="py-4 px-24 border-b-2">
      <div className="flex justify-between items-center">
        <NavLink to="/">
          <div className="flex gap-2 items-center">
            <img src={logo} />
            <span className="font-semibold text-2xl">TaskDuty</span>
          </div>
        </NavLink>
        <div className="flex gap-8 items-center">
          {location.pathname !== "/newtask" &&  location.pathname !== "/edittask" && (
            <NavLink to="/newtask" className="font-medium text-xl">
              New Task
            </NavLink>
          )}
          {location.pathname !== "/mytask" && (
            <NavLink to="/mytask" className="font-medium text-xl">
              All Tasks
            </NavLink>
          )}
          <img src={profileImg} className="w-14" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
