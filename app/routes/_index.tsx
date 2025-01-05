import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export const meta: MetaFunction = () => {
  return [
    { title: "Boblogs" },
    { name: "description", content: "A place where bob blogs" },
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
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Kanye Says...</CardTitle>
            <CardDescription>Lets get that wisdom</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p>{quote.quote}</p>
          </CardContent>
        </Card>
      </main>
    </>
  );
}

export async function loader() {
  const quote = await fetch("https://api.kanye.rest");
  return quote;
}
