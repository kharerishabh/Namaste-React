import { useEffect, useState } from "react";
import { LOGO_URL } from "../utilis/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  useEffect(() => {
    console.log('Use')
  }, [btnName])
  console.log('Header')
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
            className="login"
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
