import Product from "./Product.jsx";
import Seed from "./seed.js";

function ProductList() {
  const products = Seed.products.sort((a, b) => b.votes - a.votes);

  return (
    <div>
      {Seed.products.map((product) => (
        <Product
          key={'product-' + product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          url={product.url}
          votes={product.votes}
          submitterAvatarUrl={product.submitterAvatarUrl}
          productImageUrl={product.productImageUrl}
        />
      ))}
    </div>
  );
}

export default ProductList;
