import Down from "../images/Down.svg";
import Logo from "../images/Logo.svg";
const UserName = () => {
  return (
    <div className="bg-white px-8 w-175 h-45 my-auto rounded-3xl flex justify-between">
      <input
        onClick={() => {
          //Show Accounts
        }}
        type="image"
        className="h-30 my-auto my-auto cursor-pointer"
        src={Logo}
        alt="text"
      />
      <p className="text-tiny text-center py-14 ml-8 justify-center">
        {"JOhndow.near"}
      </p>
      <input
        onClick={() => {
          //Show Accounts
        }}
        type="image"
        className="h-10 my-auto mt-20 mx-14 cursor-pointer"
        src={Down}
        alt="text"
      />
    </div>
  );
};

export default UserName;
