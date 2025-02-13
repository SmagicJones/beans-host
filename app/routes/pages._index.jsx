import { useLoaderData } from "@remix-run/react";

import { Button } from "../components/ui/button";

export default function Pages() {
  const pages = useLoaderData();
  console.log(pages);
  return (
    <main>
      <h1>Pages</h1>
      <div className="grid md:grid-cols-4 gap-4">
        {pages.map((page) => {
          return (
            <div>
              <h3>{page.slug}</h3>
              <Button>
                <a href={`/pages/${page.slug}`}>More detail</a>
              </Button>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export async function loader() {
  const pages = await fetch(
    "https://devplayground.3dcoded.com/wp-json/wp/v2/pages"
  );
  return pages;
}
