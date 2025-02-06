import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/react";
import { useState } from "react";
export default function Wordpress() {
  const books = useLoaderData();

  //   console.log(Object.keys(books));

  //   books.forEach((book) => {
  //     console.log(book);
  //   });

  console.log(books);

  return (
    <main>
      <section>
        <div className="grid md:grid-cols-1">
          <div className="bg-slate-500 p-4 rounded">
            <h1 className="text-center text-2xl text-white">Wordpress Stuff</h1>
          </div>
        </div>
      </section>

      <ul className="grid md:grid-cols-2 gap-4">
        {books.map((book) => {
          return (
            <li key={book.id} className="bg-slate-200 p-4 rounded">
              <h3 className="text-4xl">{book.title.rendered}</h3>
              {book.excerpt.rendered}
              <a href={book.link}>Go</a>
            </li>
          );
        })}
      </ul>

      {/* <section>
        <h1>{books[0].title.rendered}</h1>
        <h3>{books[0].slug}</h3>
        <p>{books[0].content.rendered}</p>
        <h1>{books[1].title.rendered}</h1>
      </section> */}
    </main>
  );
}

export async function loader() {
  const books = await fetch(
    "https://devplayground.3dcoded.com/wp-json/wp/v2/books"
  );
  return books;
}
