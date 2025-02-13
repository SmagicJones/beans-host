import { useLoaderData } from "@remix-run/react";

import { aspectRatio } from "../components/ui/aspect-ratio";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

import { Button } from "../components/ui/button";

export default function Woo() {
  const products = useLoaderData();
  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="bg-purple-300 p-4 rounded text-white"
          >
            <Button>
              <a href={`/products/${product.slug}`}>More detail</a>
            </Button>

            <h3 className="text-center text-2xl">{product.name}</h3>
            <div className="flex justify-center items-center">
              {product.images[0] ? (
                <img
                  className="w-[400px] h-[400px] rounded"
                  src={product.images[0].src}
                  alt={product.name}
                />
              ) : (
                <p>Beans</p>
              )}
            </div>

            <div
              className="text-center"
              dangerouslySetInnerHTML={{ __html: product.price_html }}
            ></div>
            <p>{product.slug}</p>
            {/* <p
              dangerouslySetInnerHTML={{ __html: product.htmlcontent.rendered }}
            ></p> */}

            {/* <div className="grid md:grid-cols-2 gap-4">
              {product.images.map((image) => {
                return (
                  <div className="rounded">
                    {image.src && <img src={image.src} alt={image.alt} />}
                  </div>
                );
              })}
            </div> */}
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
