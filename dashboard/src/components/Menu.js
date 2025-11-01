import { useState } from "react";
import { Link } from "react-router-dom";
import api from "./api";

const Menu = ({user}) => {
  const [selectedMenu, setselectedMenu] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (index) => {
    setselectedMenu(index);
  };

  const handleLogOut = async () => {
    try {
      await api.post("/logout");
      window.location.href = "https://zerodha-app-qfcm.onrender.com";
    } catch(err) {
      console.log(err);
      alert("Log Out failled");
    }
  }

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img className="img-logo" alt="img-logo" src="logo (1).png" style={{ width: "50px" }} />
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <div className={`menus ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ?  activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
              <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none",}}
              onClick={() => handleLogOut()}
            >
                <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                <b>Log Out</b>
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">U</div>
          <p className="username">{user.username}</p>
        </div>
      </div>
    </div>

    // <div className="menu-container">
    //   <img src="logo (1).png" style={{ width: "50px" }} />

    //   {/* Hamburger for mobile */}
    //   <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
    //     ☰
    //   </div>

    //   <div className={`menus ${menuOpen ? "active" : ""}`}>
    //     <ul>
    //       <li>
    //         <Link to="/" onClick={() => handleMenuClick(0)}>
    //           <p className={selectedMenu === 0 ? "active" : ""}>Dashboard</p>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/orders" onClick={() => handleMenuClick(1)}>
    //           <p className={selectedMenu === 1 ? "active" : ""}>Orders</p>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/holdings" onClick={() => handleMenuClick(2)}>
    //           <p className={selectedMenu === 2 ? "active" : ""}>Holdings</p>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/positions" onClick={() => handleMenuClick(3)}>
    //           <p className={selectedMenu === 3 ? "active" : ""}>Positions</p>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/funds" onClick={() => handleMenuClick(4)}>
    //           <p className={selectedMenu === 4 ? "active" : ""}>Funds</p>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/logout" onClick={handleLogOut}>
    //           <b>Log Out</b>
    //         </Link>
    //       </li>
    //     </ul>
    //     <hr />
    //     <div className="profile">
    //       <div className="avatar">U</div>
    //       <p className="username">{user.username}</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Menu;
