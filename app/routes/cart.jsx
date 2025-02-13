import { useLoaderData } from "@remix-run/react";

export default function Cart() {
  const cart = useLoaderData();
  console.log(cart, "this is the cart");

  return (
    <main>
      <div> {cart.items.length > 0 && <h1>Stuff in the cart</h1>}/</div>
      <div className="grid md:grid-cols-2 gap-4">
        {cart.items.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
    </main>
  );
}

export async function loader() {
  const cart = await fetch(
    `https://devplayground.3dcoded.com/wp-json/wc/store/cart?consumer_key=${process.env.CONSUMER_KEY}&consumer_secret=${process.env.CONSUMER_SECRET}`
  );
  return cart;
}
