import Up from "../images/Up.svg";
import Back from "../images/Back.svg";
import Settings from "../images/Settings.svg";
import Notification from "../images/Notification.svg";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <div className="w-container flex border-b bg-whiteSmoke border-grey-dark h-70 justify-center">
      <input
        onClick={() => {
          //Go Back
        }}
        type="image"
        className="h-20 my-auto mx-14 cursor-pointer"
        src={Back}
        alt="text"
      />
      <input
        onClick={() => {
          //Perform Button function
        }}
        type="image"
        className="h-20 my-auto mx-14 cursor-pointer"
        src={Up}
        alt="text"
      />

      <p className="w-175 my-auto"> username</p>
      <input
        onClick={() => {
          //Open Notifications
        }}
        type="image"
        className="h-20 my-auto mx-14 cursor-pointer"
        src={Notification}
        alt="text"
      />
      <input
        onClick={() => {
          //Open Settings
        }}
        type="image"
        className="h-20 my-auto mx-14 cursor-pointer"
        src={Settings}
        alt="text"
      />
    </div>
  );
};

export default Header;
