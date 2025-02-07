import { useLoaderData } from "@remix-run/react";

import { Button } from "../components/ui/button";

export default function Wordpress() {
  const books = useLoaderData();

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
          //   console.log(book);
          return (
            <li key={book.id} className="bg-slate-200 p-4 rounded">
              <h3 className="text-4xl">{book.title.rendered}</h3>
              <img src={``} />
              <div
                dangerouslySetInnerHTML={{ __html: book.excerpt.rendered }}
              />
              <Button>
                <a href={book.link}>Go</a>
              </Button>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export async function loader() {
  const books = await fetch(
    "https://devplayground.3dcoded.com/wp-json/wp/v2/books"
  );

  return books;
}
