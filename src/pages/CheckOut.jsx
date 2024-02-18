import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { Divider } from "../components/Divider";

function CheckOut() {
  const { state } = useLocation();

  const Navigate = useNavigate();
  const content = state?.products?.map((product) => {
    return (
      <div
        className="w-full bg-white grid grid-cols-4 items-center"
        key={product.id}>
        <div className="h-20 w-20">
          <img src={product.image} alt="" className="bg-red-400" />
        </div>
        <p className="text-center"> Product : &nbsp;{product.title}</p>
        <p className="text-center"> qty: &nbsp;{product.qty}</p>
        <p className="text-center">Price: &nbsp; {product.price}$</p>
      </div>
    );
  });
  const handlePay = () => {
    Navigate("/success");
  };

  return (
    <>
      <Navbar />

      <div className="h-screen flex flex-col items-center gap-8 ">
        <h1 className="text-3xl font-bold p-4 flex gap-4">Checkout</h1>

        <div className="flex justify-between p-4 gap-8">
          <div className="flex flex-col gap-4 border-2 border-black rounded-sm w-[50%] h-full p-8">
            <h2>Shopping info</h2>
            <div className="flex flex-col gap-1 px-4">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="border-2 border-gray-200 rounded-md p-1"
              />
            </div>
            <div className="flex flex-col gap-1 px-4">
              <label htmlFor="adress">Adress</label>
              <input
                type="text"
                id="adress"
                className="border-2 border-gray-200 rounded-md p-1"
              />
            </div>
            <div className="flex flex-col  items-center w-full md:flex-row ">
              <div className="flex flex-col gap-1 px-4 md:w-[50%]">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  className="border-2 border-gray-200 rounded-md p-1 "
                />
              </div>
              <div className="flex flex-col gap-1 px-4 md:w-[50%]">
                <label htmlFor="zip">Zip</label>
                <input
                  type="text"
                  id="zip"
                  className="border-2 border-gray-200 rounded-md p-1  "
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 px-4">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="number"
                id="cardNamber"
                className="border-2 border-gray-200 rounded-md p-1"
              />
            </div>
            <div className="flex flex-col  items-center w-full md:flex-row ">
              <div className="flex flex-col gap-1 px-4  md:w-[50%]">
                <label htmlFor="expDate">Exp Date</label>
                <input
                  type="date"
                  id="expDate"
                  className="border-2 border-gray-200 rounded-md p-1"
                />
              </div>
              <div className="flex flex-col gap-1 px-4  md:w-[50%]">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="number"
                  id="cvv"
                  className="border-2 border-gray-200 rounded-md p-1"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col  items-center gap-4 border-2 rounded-sm border-gray-900 p-4">
            <h2>Order Summery</h2>
            <Divider />
            {content}
            <Divider />

            <h1>Total: {state?.total}$</h1>
          </div>
        </div>
        <button
          onClick={handlePay}
          className="  bg-yellow-500 rounded-lg hover:bg-yellow-600 py-2 hover:-translate-y-[2px]  px-5 font-bold focus: shadow-lg transform active:scale-90 transition-transform w-40 ">
          Buy
        </button>
      </div>
    </>
  );
}

export default CheckOut;
