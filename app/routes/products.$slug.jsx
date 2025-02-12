import { useLoaderData } from "@remix-run/react";

export default function Product() {
  const productData = useLoaderData();

  return (
    <div className="grid grid-cols-2 gap-4">
      {productData.map((product) => {
        return (
          <div className="bg-lime-500 p-4 rounded">
            <h3 className="text-2xl text-center">{product.name}</h3>
            <p
              dangerouslySetInnerHTML={{ __html: product.htmlcontent.rendered }}
            ></p>
          </div>
        );
      })}
      <div className="bg-lime-400 rounded">
        {productData.map((product) => {
          return product.images.map((image) => {
            return (
              <div>
                <img src={image.src} />
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const slug = params.slug;
  const product = await fetch(
    `https://devplayground.3dcoded.com/wp-json/wc/v3/products?consumer_key=${process.env.CONSUMER_KEY}&consumer_secret=${process.env.CONSUMER_SECRET}&slug=${slug}`
  );
  return product;
}
