import { useLoaderData } from "@remix-run/react";

export default function Slug() {
  const bookData = useLoaderData();
  console.log(bookData);
  return (
    <main>
      {bookData &&
        bookData.map((book, i) => {
          return (
            <div key={i} className="grid grid-cols-1 gap-4">
              <div className="bg-slate-300 p-4 rounded text-center text-2xl">
                {book.title.rendered}
              </div>
              <div
                className="bg-slate-500 rounded text-center text-white p-4"
                dangerouslySetInnerHTML={{ __html: book.content.rendered }}
              ></div>
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
