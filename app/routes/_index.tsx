import { json, type MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <section>
        <div className="grid md:grid-cols-2 m-2 gap-4">
          <div className="bg-slate-500 rounded p-4">
            <h3 className="text-4xl text-center">Testing</h3>
          </div>
        </div>
      </section>
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
        <h3 className="text-2xl text-center">Welcome to the Home page</h3>
      </div>
    </>
  );
}
