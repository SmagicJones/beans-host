import { useLoaderData } from "@remix-run/react";

export default function Woo() {
  const products = useLoaderData();
  return (
    <div className="grid md:grid-cols-4 gap-4">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h3>{product.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export async function loader() {
  const products = await fetch(
    `https://devplayground.3dcoded.com/wp-json/wc/v3/products?consumer_key=${process.env.CONSUMER_KEY}&consumer_secret=${process.env.CONSUMER_SECRET}`
  );
  return products;
}
