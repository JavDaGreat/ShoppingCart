import { IoMdRemoveCircleOutline } from "react-icons/io";
import { MdAddCircleOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/store";

function ShowCart({ title, price, id, image }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const theOne = products.find((product) => product.id === id);

  const handleInc = () => {
    dispatch(increment(id));
  };
  const handleDec = () => {
    dispatch(decrement(id));
  };

  return (
    <div className="grid grid-cols-4 gap-4 place-content-center py-4 px-2 h-20 w-[100%] ">
      <div className=" w-20 h-20 overflow-hidden">
        <img src={image} alt="image" />
      </div>
      <p className="font-bold flex justify-center items-center ">{title}</p>
      <p className="font-bold flex justify-center items-center">{price} $</p>
      <div className="flex justify-center items-center">
        <button onClick={handleInc}>
          <MdAddCircleOutline size={25} />
        </button>
        <p className="px-4 font-bold">{theOne.qty}</p>
        <button onClick={handleDec}>
          <IoMdRemoveCircleOutline size={25} />
        </button>
      </div>
    </div>
  );
}

export default ShowCart;
