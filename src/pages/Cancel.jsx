import icon from "../assets/deny.svg";
import Navbar from "../components/Navbar";

function Cancel() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen w-screen py-16 px-16 shadow-lg">
        <h1 className="font-bold text-xl py-8 px-8 ">
          Your purchase denied please try again!{" "}
        </h1>
        <img className=" w-24 h-24 object-contain" src={icon} alt="" />
      </div>
    </div>
  );
}

export default Cancel;
