import { Form, redirect, useActionData, useLoaderData } from "@remix-run/react";

import { wooClient } from "../utils/woocommerce.cjs";

import { Button } from "../components/ui/button";

export default function Product() {
  const productData = useLoaderData();
  const formResponse = useActionData();

  return (
    <main className="grid grid-cols-1 gap-x">
      {formResponse && (
        <div className="bg-lime-50 p-4 text-center text-2xl">
          {formResponse.message}
        </div>
      )}
      {productData &&
        productData.map((product) => {
          console.log(product.images, "product images");
          return (
            <>
              <div key={product.id} className="bg-slate-500 p-4 text-white">
                <h3 className="text-2xl">{product.name}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <img className="rounded m-2" src={product.images[0].src} />
                  <div className="grid grid-cols-4 gap-4 flex-col">
                    {product.images.map((image) => {
                      return (
                        <div className="p-2">
                          <img src={image.src} alt="" />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <Form
                    method="post"
                    className="bg-slate-500 p-4 m-2 grid md:grid-cols-2 gap-4 rounded text-white"
                  >
                    <input
                      type="hidden"
                      id="productId"
                      name="productId"
                      value={product.id}
                      className="rounded"
                    />
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="rounded"
                      required
                    />
                    <label htmlFor="surname">Surname</label>
                    <input
                      type="text"
                      id="surname"
                      name="surname"
                      className="rounded"
                      required
                    />
                    <label htmlFor="quantity">Quantity</label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      className="rounded"
                      required
                    />

                    <div></div>
                    <Button>Order Now</Button>
                  </Form>
                </div>
              </div>
              <div className="grid grid-cols-1">
                <div
                  className="p-4 space-y-2"
                  dangerouslySetInnerHTML={{
                    __html: product.htmlcontent.rendered,
                  }}
                ></div>
              </div>
              <div></div>
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
  const name = productDetails.name;
  const surname = productDetails.surname;
  const quantity = productDetails.quantity;

  const order = {
    payment_method: "bacs",
    payment_method_title: "Direct Bank Transfer",
    set_paid: true,
    billing: {
      first_name: name,
      last_name: surname,
      address_1: "969 Market",
      address_2: "",
      city: "San Francisco",
      state: "CA",
      postcode: "94103",
      country: "US",
      email: "john.doe@example.com",
      phone: "(555) 555-5555",
    },
    shipping: {
      first_name: "Bobby Beans",
      last_name: "Beans Beans Beans",
      address_1: "969 Market",
      address_2: "",
      city: "San Francisco",
      state: "CA",
      postcode: "94103",
      country: "US",
    },
    line_items: [
      {
        product_id: productId,
        quantity: quantity,
      },
    ],
    shipping_lines: [
      {
        method_id: "flat_rate",
        method_title: "Flat Rate",
        total: "10.00",
      },
    ],
  };
  await wooClient.post("orders", order);
  return {
    message: "Thank you for your order!",
  };
}

export async function loader({ params }) {
  const slug = params.slug;
  const product = await fetch(
    `https://devplayground.3dcoded.com/wp-json/wc/v3/products?consumer_key=${process.env.CONSUMER_KEY}&consumer_secret=${process.env.CONSUMER_SECRET}&slug=${slug}`
  );
  return product;
}
