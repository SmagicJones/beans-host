import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <div className="grid grid-cols-1 m-2 gap-4">
        <div className="rounded bg-slate-500 p-4">
          <h1 className="text-4xl text-center">
            Testing Bob with Tailwind hosted Remix app
          </h1>
        </div>
      </div>
    </div>
  );
}
