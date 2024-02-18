import check from "../assets/check.svg";

function Success() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen w-screen py-16 px-16">
        <h1 className="font-bold text-xl py-8 px-8 ">
          Success Thank you for you purchase!{" "}
        </h1>
        <img
          className=" w-24 h-24 object-contain animate-bounce"
          src={check}
          alt=""
        />
        <a href="/" className="bg-gray-400 py-2 px-4  rounded-md ml-8">
          {" "}
          go to home
        </a>
      </div>
    </div>
  );
}

export default Success;
