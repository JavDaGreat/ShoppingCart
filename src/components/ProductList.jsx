import ProductShow from "./ProductShow";
import jsonProducts from "../assets/product_API.json";

function ProductList() {
  const content = jsonProducts.map((jsonProduct) => {
    return (
      <ProductShow
        title={jsonProduct.title}
        key={jsonProduct.id}
        id={jsonProduct.id}
        price={jsonProduct.price}
        image={jsonProduct.images}
      />
    );
  });

  return (
    <div className="grid md:grid-cols-3 grid-col-1 gap-4 py-2 px-2 place-content-center ">
      {content}
    </div>
  );
}
export default ProductList;
