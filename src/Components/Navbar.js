import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterBooks } from "./booksSlice";
import { AiOutlineSearch } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    dispatch(filterBooks(event.target.value));
  };

  const handleSearch = () => {
    dispatch(filterBooks(searchTerm));
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">Book-Ecom</div>

      <div className="search-container">
        <input
          type="text"
          color="white"
          placeholder="Search Here"
          value={searchTerm}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          className="search-input"
        />
        <AiOutlineSearch className="search-icon" onClick={handleSearch} />{" "}
      </div>
    </nav>
  );
};

export default Navbar;
