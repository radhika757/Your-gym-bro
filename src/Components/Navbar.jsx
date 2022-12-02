import { FaUser, FaChartLine } from "react-icons/fa";
import { BsPlusCircleFill, BsBellFill } from "react-icons/bs";
import { AiTwotoneHome } from "react-icons/ai";
import { HiChartSquareBar } from "react-icons/hi";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () =>{
    return(
<div>
<nav className="navbar navbar-light bg-dark p-3 m-1 list-unstyled class rounded-pill">
        <NavLink
          to="/Home"
          onMouseOver={({target}) => target.style.color="#3D9970"}
          onMouseOut={({target}) => target.style.color="grey"}
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-secondary"
          }
        >
          <AiTwotoneHome />
        </NavLink>

        <NavLink
          to="/Profile"
          className={({ isActive }) =>
            isActive ? "text-purple" : "text-secondary"
          }
        >
          <FaUser />
        </NavLink>

        <NavLink
          to="/Workout"
          className={({ isActive }) =>
            isActive ? "text-warning" : "text-secondary"
          }
        >
          <BsPlusCircleFill />
        </NavLink>

        <NavLink
          to="/Analytics"
          className={({ isActive }) =>
            isActive ? "text-purple" : "text-secondary"
          }
        >
          <HiChartSquareBar />
        </NavLink>

        <NavLink
          to="/Notifications"
          className={({ isActive }) =>
            isActive ? "text-purple" : "text-secondary"
          }
        >
          <BsBellFill />
        </NavLink>
      </nav>
      <div className="Outlet">
        <Outlet />
      </div>
</div>
    );
}

export default Navbar;