import { useSelector } from "react-redux";
import ShowCart from "./ShowCart";
import { FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Cart({ open, setOpen }) {
  const products = useSelector((state) => state.products.data);
  const total = products.reduce((acc, product) => {
    return acc + product.price * product.qty;
  }, 0);

  const Navigate = useNavigate();

  const content = products.map((product) => {
    console.log(product.image);
    return (
      <ShowCart
        title={product.title}
        key={product.id}
        id={product.id}
        price={product.price}
        image={product.image}
      />
    );
  });
  const checkOut = () => {
    Navigate("/checkout", { state: { products, total } });
  };

  return (
    <div
      className={
        !open
          ? "hidden "
          : "fixed top-0 right-0  sm:w-96  w-56  h-full bg-white/95 shadow-lg flex items-center flex-col z-20 gap-4"
      }>
      <FaTimes
        className=" text-3xl font-bold self-start justify-self-auto focus: shadow-lg transform active:scale-90 transition-transform "
        onClick={() => setOpen(!open)}
      />

      <h1 className="text-3xl font-bold py-4 px-4 flex gap-4">
        Cart <FaCartShopping />
      </h1>
      {content}
      <div
        className={
          !content?.length
            ? "hidden"
            : "flex justify-between gap-8 items-center"
        }>
        <h1>Total: {total}$</h1>
        <button
          onClick={checkOut}
          className=" bg-yellow-500 rounded-lg hover:bg-yellow-600 py-2 hover:-translate-y-[2px]  px-5 font-bold focus: shadow-lg transform active:scale-90 transition-transform ">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
