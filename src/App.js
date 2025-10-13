import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import "./App.css";
import AddProducts from "./Pages/Products/AddProducts";
import Products from "./Pages/Products/Products";
import { AiFillProduct } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import {
  MdReviews,
  MdSpaceDashboard,
  MdOutlineDoubleArrow,
} from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { IoLogOut } from "react-icons/io5";
import Bidders from "./Pages/Bidders/Bidders";
import AddArtist from "./Pages/Artist/AddArtist";
import Artists from "./Pages/Artist/Artists";
import RegisteredUsers from "./Pages/Users/RegisteredUsers";
import { FaUserTie } from "react-icons/fa6";

const App = ({ onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeitems, setActiveitems] = useState(null);
  const [isOpen, setIsOpen] = useState(true); // ✅ state for sidebar open/close

  const allItems = [
    { id: 1, name: "Bidders", route: "/bidders", icon: <FaUsers /> },
    { id: 2, name: "Products", route: "/Products", icon: <AiFillProduct /> },
    { id: 3, name: "Artists", route: "/artists", icon: <FaUserTie /> },
    {
      id: 4,
      name: "Registered Users",
      route: "/registered-users",
      icon: <HiUsers />,
    },
  ];

  useEffect(() => {
    const currentItem = allItems.find(
      (item) => item.route === location.pathname
    );
    setActiveitems(currentItem?.id || null);
  }, [location.pathname]);

  const handleitemsClick = (item) => {
    setActiveitems(item.id);
    navigate(item.route);
  };

  // ✅ Toggle function
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="App">
      <div className={`app-side-bar ${isOpen ? "open" : "closed"}`}>
        <div className="opencloseicon" onClick={toggleMenu}>
          <MdOutlineDoubleArrow className={isOpen ? "rotated" : ""} />
        </div>

        <img src="/moawin-logo.png" className="logo" alt="Moawin Logo" />

        <ul>
          {allItems.map((item) => (
            <li
              key={item.id}
              className={
                activeitems === item.id ? "selected-item" : "unselected"
              }
              onClick={() => handleitemsClick(item)}
            >
              {item.icon}
              {isOpen && <span>{item.name}</span>}
            </li>
          ))}
          <li className="unselected" onClick={onLogout}>
            <IoLogOut />
            {isOpen && <span>Logout</span>}
          </li>
        </ul>
      </div>

      <div className="app-right">
        <Routes>
          {/* <Route path="/usertype" element={<UserType />} />
          <Route path="/users" element={<Users />} /> */}
          <Route path="/Products" element={<Products />} />
          <Route path="/add-Products" element={<AddProducts />} />
          <Route path="/edit-Products/:id" element={<AddProducts />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/add-artist" element={<AddArtist />} />
          <Route path="/edit-artist/:id" element={<AddArtist />} />
          <Route path="/bidders" element={<Bidders />} />
          <Route path="/registered-users" element={<RegisteredUsers />} />
          <Route path="*" element={<Navigate to="/Products" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
