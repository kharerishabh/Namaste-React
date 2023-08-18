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
    <div className="flex justify-between bg-purple-50 border-4">
      <div className="w-56">
        <img src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">OnlineStatus: {onlineStatus ? '✅': '🔴'}</li>
          <li className="px-4"><Link to='/'>Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to='/contact'>Contact Us</Link></li>
          <li className="px-4"><Link to='/grocery'>Grocery</Link></li>
          <li className="px-4">Cart</li>
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
