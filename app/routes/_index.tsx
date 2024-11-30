import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

interface Quote {
  quote: string;
}

export default function Index() {
  const quote: Quote = useLoaderData();

  return (
    <>
      <main>
        <section className="p-4">
          <h3 className="text-center text-2xl p-2">As Kanye would say...</h3>

          <div className="grid grid-cols-1">
            <div className="bg-purple-300 p-4 justify-center items-center text-center">
              <div>
                <h5 className="text-2xl">{quote.quote}</h5>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export async function loader() {
  const quote = await fetch("https://api.kanye.rest");
  return quote;
}
