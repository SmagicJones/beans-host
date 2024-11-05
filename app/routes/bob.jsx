// import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { client } from "../utils/db.server";

export default function Bob() {
  //   const movies = useLoaderData();
  //   console.log(movies);
  return <h3 className="text-2xl text-center">Welcome to the Bob page</h3>;
}

// export async function loader() {
//   let db = await client.db("sample_mflix");
//   let collection = await db.collection("movies");
//   let movies = await collection.find({}).limit(10).toArray();
//   return JSON.stringify(movies);
// }
