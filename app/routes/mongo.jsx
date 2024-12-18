import { useLoaderData } from "@remix-run/react";
import { client } from "../utils/db.server";
import { json } from "@remix-run/node";

export default function Mongo() {
  const movie = useLoaderData();
  console.log(movie);
  return (
    <div className="grid md:grid-cols-2">
      <div className="bg-slate-500">
        <h3>{movie.title}</h3>
      </div>
    </div>
  );
}

export async function loader() {
  let db = await client.db("sample_mflix");
  let collection = await db.collection("movies");
  let movie = await collection.findOne();
  return json(movie);
}
