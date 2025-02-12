import { useLoaderData } from "@remix-run/react";

export default function Woo() {
  const products = useLoaderData();
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {products.map((product) => {
        console.log(product);
        return (
          <div key={product.id}>
            <h3 className="text-center text-2xl">{product.name}</h3>
            <div
              className="text-center"
              dangerouslySetInnerHTML={{ __html: product.price_html }}
            ></div>
            <p
              dangerouslySetInnerHTML={{ __html: product.htmlcontent.rendered }}
            ></p>

            <div className="grid md:grid-cols-2 gap-4">
              {product.images.map((image) => {
                return (
                  <div className="rounded">
                    {image.src && <img src={image.src} alt={image.alt} />}
                  </div>
                );
              })}
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
