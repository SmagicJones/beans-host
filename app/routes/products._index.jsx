import { useLoaderData, Link } from "@remix-run/react";

import { Button } from "../components/ui/button";

export default function Woo() {
  const products = useLoaderData();

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="bg-purple-300 p-4 rounded text-white"
          >
            <h3 className="text-center text-2xl p-4">{product.name}</h3>
            <div className="flex justify-center items-center">
              {product.images[0] ? (
                <div className="w-[450px]">
                  <img
                    style={{ aspectRatio: "1/1" }}
                    className="rounded"
                    src={product.images[0].src}
                    alt={product.name}
                  />
                </div>
              ) : (
                <p>Beans</p>
              )}
            </div>

            <div
              className="text-center text-2xl p-2"
              dangerouslySetInnerHTML={{ __html: product.price_html }}
            ></div>
            <div className="flex justify-center items-center p-4">
              <Button>
                <Link prefetch="render" to={`/products/${product.slug}`}>
                  Learn More
                </Link>
              </Button>
            </div>
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
