import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, NavLink, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/search?q=${searchInput}`);
      setSearchInput(""); // optional: clear input after search
    }
  };

  return (
    <div className="flex items-center justify-between w-full h-16 bg-white border-b-2 sm:px-16 px-2">
      <div className="flex items-center gap-8">
        <Link to="/">
          <h1 className="sm:text-3xl text-2xl font-semibold">Movies</h1>
        </Link>
        <div className="md:flex gap-6 items-center hidden">
          <NavLink to="/tv">
            <h2 className="hover:text-primary">TV Show</h2>
          </NavLink>
          <NavLink to="/movie">
            <h2 className="hover:text-primary">Movies</h2>
          </NavLink>
        </div>
      </div>

      <div className="flex md:gap-8 gap-4 items-center">
        <form onSubmit={handleSubmit} className="flex items-center border rounded">
          <input
            type="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search here.."
            className="sm:w-60 w-40 bg-transparent md:px-4 px-2 py-2 outline-none"
          />
          <button type="submit" className="px-2">
            <SearchIcon sx={{ fontSize: 24 }} className="cursor-pointer" />
          </button>
        </form>

        <AccountCircleIcon
          fontSize="large"
          className="text-gray-700 cursor-pointer hover:scale-110 transition-all"
        />
      </div>
    </div>
  );
};

export default Header;
