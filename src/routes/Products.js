import Product from "../components/Product";
import { products } from "../db/productData";

export default function Products() {
  return (
    <section className="products">
      {products.map((product, idx) => {
        return (
          <Product
            title={product.title}
            subscript={product.subscript}
            price={product.price}
            key={idx}
            imageSrc={product.imageSrc}
            imageAlt={product.imageAlt}
          />
        );
      })}
    </section>
  );
}
