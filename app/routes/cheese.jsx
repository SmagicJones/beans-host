import { useLoaderData } from "@remix-run/react";
import { wooClient } from "../utils/woocommerce.cjs";

export default function Beany() {
  return (
    <main>
      <h1>Beany Route</h1>
    </main>
  );
}

export async function loader() {
  const productData = {
    name: "Bob's Perfect present",
    regular_price: "10.00",
  };
  await wooClient.post("products", productData);
  return null;
}
