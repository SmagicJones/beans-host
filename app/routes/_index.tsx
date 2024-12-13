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
            <div className="flex justify-center">
              <div className="bg-purple-300 p-4 justify-center items-center text-center rounded  w-[100vw] md:w-[90vw] lg:w-[70vw]">
                <div>
                  <h5 className="text-2xl">{quote.quote}</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="grid grid-cols-4 gap-2">
              <div className="bg-purple-100 p-4 rounded">
                <h3 className="text-2xl">I feel great</h3>
                <p>
                  I feel great because I've just found a super simple solution
                  for columns that really makes a massive shortcut available
                </p>
              </div>
              <div className="bg-purple-100 p-4 rounded">Hi</div>
              <div className="bg-purple-100 p-4 rounded">Hi</div>
              <div className="bg-purple-100 p-4 rounded">Hi</div>
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
