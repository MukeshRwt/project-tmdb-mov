import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import clsx from "clsx"; // For better class handling

const MobileNav = () => {
  return (
    <div className=" md:hidden  fixed bottom-0 left-0 right-0 w-full h-20 bg-black flex items-center px-6 border-t border-gray-700 justify-between text-neutral-500 z-40">
      <NavLink
        to="/"
        className={({ isActive }) =>
          clsx("flex flex-col items-center gap-1", isActive && "text-white")
        }
      >
        <HomeIcon sx={{ fontSize: 30 }} />
        <p className="text-sm">Home</p>
      </NavLink>
      <NavLink
        to="/movie"
        className={({ isActive }) =>
          clsx("flex flex-col items-center gap-1", isActive && "text-white")
        }
      >
        <MovieIcon sx={{ fontSize: 30 }} />
        <p className="text-sm">Movies</p>
      </NavLink>
      <NavLink
        to="/tv"
        className={({ isActive }) =>
          clsx("flex flex-col items-center gap-1", isActive && "text-white")
        }
      >
        <LiveTvIcon sx={{ fontSize: 30 }} />
        <p className="text-sm">TV Shows</p>
      </NavLink>
    </div>
  );
};

export default MobileNav;
