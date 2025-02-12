import { useLoaderData } from "@remix-run/react";
import { BookLock } from "lucide-react";

export default function Slug() {
  const bookData = useLoaderData();
  return (
    <main>
      {bookData &&
        bookData.map((book, i) => {
          return (
            <div key={i}>
              <p>Book Title: {book.title.rendered}</p>
            </div>
          );
        })}
    </main>
  );
}

export async function loader({ params }) {
  const slug = params.slug;
  const book = await fetch(
    `https://devplayground.3dcoded.com/wp-json/wp/v2/books?slug=${slug}`
  );
  return book;
}
