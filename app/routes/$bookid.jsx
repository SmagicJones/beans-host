import { useLoaderData } from "@remix-run/react";

export default function Book() {
  const book = useLoaderData();
  return (
    <main>
      <div className="grid grid-cols-1">
        <div className="bg-slate-500 text-center">
          <h1 className="text-white text-center">Book Route</h1>
        </div>
      </div>
      <p>Book Title: {book.title.rendered}</p>
      <p dangerouslySetInnerHTML={{ __html: book.content.rendered }}></p>
    </main>
  );
}

export async function loader({ params }) {
  // const bookid = "121";
  const bookid = params.bookid;
  const book = await fetch(
    `https://devplayground.3dcoded.com/wp-json/wp/v2/books/${bookid}`
  );
  return book;
}
