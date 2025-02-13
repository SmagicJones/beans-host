import { useLoaderData } from "@remix-run/react";

export default function Page() {
  const pageData = useLoaderData();

  return (
    <main>
      <h1>Page Route</h1>
      {pageData.map((page) => {
        return <div>{page.slug}</div>;
      })}
    </main>
  );
}

export async function loader({ params }) {
  const slug = params.slug;
  const page = await fetch(
    `https://devplayground.3dcoded.com/wp-json/wp/v2/pages?slug=${slug}`
  );
  return page;
}
