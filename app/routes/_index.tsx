import { json, type MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

import { client } from "../utils/db.server";
import { useLoaderData } from "@remix-run/react";

export default function Index() {
  // const movies = useLoaderData();
  // console.log(movies);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h3 className="text-2xl text-center">Welcome to the Home page</h3>
    </div>
  );
}

// export async function loader() {
//   let db = await client.db("sample_mflix");
//   let collection = await db.collection("movies");
//   let movies = await collection.find({}).limit(10).toArray();
//   return json(movies);
// }
