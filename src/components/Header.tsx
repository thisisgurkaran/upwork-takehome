import Up from "../images/Up.svg";
import Back from "../images/Back.svg";
import Settings from "../images/Settings.svg";
import Notification from "../images/Notification.svg";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <div className="w-full flex pl-40 h-40 border">
      <img src={Back} className="h-20" />
      <img src={Up} className="h-20" />
      <img src={Notification} className="h-20" />
      <img src={Settings} className="h-20" />
      <img src={logo} className="" />
    </div>
  );
};

export default Header;
