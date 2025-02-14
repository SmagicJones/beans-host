import { Form, redirect, useActionData, useLoaderData } from "@remix-run/react";

import { Button } from "../components/ui/button";

export default function Product() {
  const productData = useLoaderData();
  const response = useActionData();

  console.log(response, "this is the thing");

  return (
    <main className="grid grid-cols-1 gap-x">
      {productData &&
        productData.map((product) => {
          return (
            <>
              <div key={product.id} className="bg-slate-500 p-4 text-white">
                <h3>{product.name}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div
                  className="p-4 space-y-2"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                ></div>
                <Form method="post">
                  <label htmlFor="productId">Enter Product ID</label>
                  <input
                    type="text"
                    id="productId"
                    name="productId"
                    placeholder={product.id}
                  />
                  <button>Add to cart</button>
                </Form>
              </div>
            </>
          );
        })}
    </main>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const productDetails = Object.fromEntries(formData);
  const productId = productDetails.productId;
  await fetch(
    `https://devplayground.3dcoded.com/wp-json/wc/store/v1/cart/add-item?id=${productId}consumer_key=${process.env.CONSUMER_KEY}&consumer_secret=${process.env.CONSUMER_SECRET}`,
    {
      method: "POST",
      headers: {
        nonce: "2ca28a4927",
      },
    }
  ).then((response) => {
    console.log(response);
  });
}

export async function loader({ params }) {
  const slug = params.slug;
  const product = await fetch(
    `https://devplayground.3dcoded.com/wp-json/wc/v3/products?consumer_key=${process.env.CONSUMER_KEY}&consumer_secret=${process.env.CONSUMER_SECRET}&slug=${slug}`
  );
  return product;
}
