import { Link } from "@remix-run/react";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

import { clients } from "../data/clients.js";

export default function Checking() {
  return (
    <main className="h-screen bg-slate-300">
      <header className="grid grid-cols-1 gap-4 p-4 bg-slate-500">
        <div className="p-4">
          <h1 className="lg:text-8xl md:text-4xl sm:text-2xl text-center p-4 font-mono">
            Welcome
          </h1>
          <div className="flex justify-center p-4">
            <Link to="/">
              <Button>Home</Button>
            </Link>
          </div>
        </div>
      </header>

      <article className="p-4 bg-slate-200 grid grid-cols-1 ">
        <div className="flex justify-center">
          <Carousel className="w-2/4">
            <CarouselContent>
              {clients.map((client) => {
                return (
                  <CarouselItem key={client.id}>
                    {" "}
                    <Card>
                      <CardHeader>
                        <div className="flex justify-center items-center ">
                          <Avatar>
                            <AvatarImage
                              src="https://github.com/shadcn.png"
                              className="hover:opacity-25"
                            />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                        </div>
                        <CardTitle>{client.title}</CardTitle>
                        <CardDescription>{client.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{client.content}</p>
                      </CardContent>
                      <CardFooter>
                        <Link to={client.link}>
                          <Button>Lets Go!</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </article>
      <section></section>
      <footer></footer>
    </main>
  );
}
