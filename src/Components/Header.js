import { useEffect, useState } from "react";
import { LOGO_URL } from "../utilis/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus()

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
          <li>OnlineStatus: {onlineStatus ? '✅': '🔴'}</li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
          <li><Link to='/grocery'>Grocery</Link></li>
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
