import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function CheckOut() {
  const { state } = useLocation();

  const Navigate = useNavigate();
  const content = state?.products?.map((product) => {
    return (
      <div
        className="w-full  grid md:grid-cols-3 sm:grid-cols-2 gap-2 py-4 px-4 place-items-center  border-gray-200 border-2 "
        key={product.id}>
        <p> Product : &nbsp;{product.title}</p>
        <p> qty: &nbsp;{product.qty}</p>
        <p>Price: &nbsp; {product.price}$</p>
      </div>
    );
  });
  const handlePay = () => {
    Navigate("/success");
  };

  return (
    <>
      <Navbar />

      <div className="h-screen ">
        <h1 className="text-3xl font-bold py-4 px-4 flex gap-4">Checkout</h1>

        <div className="flex justify-between p-4 h-full">
          <div className="flex flex-col gap-4 bg-slate-500 w-[50%] h-full">
            <h2>Shopping info</h2>
            <div className="flex flex-col gap-1 px-4">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="border-2 border-gray-200 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-1 px-4">
              <label htmlFor="adress">Adress</label>
              <input
                type="text"
                id="adress"
                className="border-2 border-gray-200 rounded-md"
              />
            </div>
            <div className="flex justify-between items-center ">
              <div className="flex flex-col gap-1 px-4">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  className="border-2 border-gray-200 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-1 px-4">
                <label htmlFor="zip">Zip</label>
                <input
                  type="text"
                  id="zip"
                  className="border-2 border-gray-200 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-1 px-4">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  className="border-2 border-gray-200 rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 px-4">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="number"
                id="cardNamber"
                className="border-2 border-gray-200 rounded-md"
              />
            </div>
            <div className="flex justify-center items-center">
              <div className="flex flex-col gap-1 px-4">
                <label htmlFor="expDate">Exp Date</label>
                <input
                  type="date"
                  id="expDate"
                  className="border-2 border-gray-200 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-1 px-4">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="number"
                  id="cvv"
                  className="border-2 border-gray-200 rounded-md"
                />
              </div>
            </div>
          </div>
          <div>{content}</div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
