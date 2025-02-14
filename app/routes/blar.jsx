import { useLoaderData } from "@remix-run/react";
import { wooClient } from "../utils/woocommerce.cjs";

export default function Blar() {
  const products = useLoaderData();

  return (
    <main>
      <div className="grid md:grid-cols-4 gap-4">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="bg-slate-500 rounded p-4 text-center"
            >
              <h3>{product.name}</h3>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export async function loader() {
  const products = await wooClient.get("products");
  return products.data;
}
