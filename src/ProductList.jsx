import React, { useState } from "react";
import Product from "./Product.jsx";
import Seed from "./seed.js";

function ProductList() {
  const [products, setProducts] = useState(Seed.products);

  const handleProductUpVote = (productId) => {
    
    const nextProducts = products.map((product) => {
        if (product.id === productId) {
            return { ...product, votes: product.votes + 1 };
        } else {
            return product;
        }
    });
    setProducts(nextProducts);
  };

  const sortedProducts = products.sort((a, b) => b.votes - a.votes);

  return (
    <div>
      {sortedProducts.map((product) => (
        <Product
          key={"product-" + product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          url={product.url}
          votes={product.votes}
          submitterAvatarUrl={product.submitterAvatarUrl}
          productImageUrl={product.productImageUrl}
          onVote={() => handleProductUpVote(product.id)} 
        />
      ))}
    </div>
  );
}

export default ProductList;
