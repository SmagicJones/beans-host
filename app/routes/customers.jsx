import { useLoaderData } from "@remix-run/react";
import { wooClient } from "../utils/woocommerce.cjs";

export default function Customers() {
  const customers = useLoaderData();
  return (
    <main>
      <h1>Customers</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {customers.map((customer) => {
          return (
            <div
              key={customer.id}
              className="bg-slate-500 rounded p-4 text-center"
            >
              <h3>{customer.first_name}</h3>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export async function loader() {
  const data = {
    payment_method: "bacs",
    payment_method_title: "Direct Bank Transfer",
    set_paid: true,
    billing: {
      first_name: "John",
      last_name: "Doe",
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
        product_id: 24,
        quantity: 85,
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
  await wooClient.post("orders", 24);
  return null;
}
