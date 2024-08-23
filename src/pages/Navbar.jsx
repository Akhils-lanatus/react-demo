import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          width: "100%",
          backgroundColor: "black",
          listStyleType: "none",
          padding: 8,
          justifyContent: "space-evenly",
        }}
      >
        <NavLink
          to={"/"}
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "white" : "black",
              color: isActive ? "black" : "white",
              padding: 10,
              fontSize: "large",
              letterSpacing: 1.6,
              textDecoration: "none",
            };
          }}
        >
          Hello
        </NavLink>
        <NavLink
          to={"/counter"}
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "white" : "black",
              color: isActive ? "black" : "white",
              padding: 10,
              fontSize: "large",
              letterSpacing: 1.6,
              textDecoration: "none",
            };
          }}
        >
          Without Thunk
        </NavLink>
        <NavLink
          to={"/products"}
          style={({ isActive }) => {
            return {
              backgroundColor: isActive && "white",
              color: isActive ? "black" : "white",
              padding: 10,
              fontSize: "large",
              letterSpacing: 1.6,
              textDecoration: "none",
            };
          }}
        >
          With Thunk
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
