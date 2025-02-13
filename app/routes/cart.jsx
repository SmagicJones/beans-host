import { useLoaderData } from "@remix-run/react";

export default function Cart() {
  const cart = useLoaderData();
  console.log(cart, "in the cart");
  return <h1>Cart</h1>;
}

export async function loader() {
  const cart = await fetch(
    `https://devplayground.3dcoded.com/wp-json/wc/v3/cart?consumer_key=${process.env.CONSUMER_KEY}&consumer_secret=${process.env.CONSUMER_SECRET}`
  );
  return cart;
}
