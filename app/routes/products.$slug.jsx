import { Form, redirect, useActionData, useLoaderData } from "@remix-run/react";
import { useNavigation } from "@remix-run/react";

import { Button } from "../components/ui/button";

export default function Product() {
  const productData = useLoaderData();

  return (
    <div className="grid grid-cols-2 gap-4">
      {productData.map((product) => {
        return (
          <div className="bg-lime-500 p-4 rounded">
            <h3 className="text-2xl text-center">{product.name}</h3>
            <Form method="post">
              <Button>
                <label className="p-2" htmlFor="productId">
                  Enter Product ID
                </label>
                <input
                  className="rounded text-black"
                  type="text"
                  id="productId"
                  name="productId"
                  // value={product.id}
                  placeholder={product.id}
                  required
                />
                <button>Add to cart</button>
              </Button>
            </Form>
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

export async function action({ request }) {
  const formData = await request.formData();
  const productDetails = Object.fromEntries(formData);
  const productID = productDetails.productId;
  console.log(productID, "product id in action");
  await fetch(
    `https://devplayground.3dcoded.com/wc/store/v1/cart/add-item?id=${productID}&quantity=1&consumer_key=${process.env.CONSUMER_KEY}&consumer_secret=${process.env.CONSUMER_SECRET}`,
    {
      method: "POST",
      headers: {
        Nonce: "eb38b59986",
      },
    }
  );
  return redirect("/cart");
}

export async function loader({ params }) {
  const slug = params.slug;
  const product = await fetch(
    `https://devplayground.3dcoded.com/wp-json/wc/v3/products?consumer_key=${process.env.CONSUMER_KEY}&consumer_secret=${process.env.CONSUMER_SECRET}&slug=${slug}`
  );
  return product;
}
