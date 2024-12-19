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
import { useState } from "react";

export default function Bobby() {
  const [selection, setSelection] = useState("BobLand");

  return (
    <main>
      <section>
        <div className="grid grid-cols-1 p-4 bg-green-200">
          <div className="flex justify-center items-center text-center">
            <div>
              <h1 className="lg:text-8xl md:text-4xl sm:text-2xl">
                Bob's World
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-200">
        <div className="text-center">
          <h2 className="text-2xl">Here are some websites I have worked on</h2>
        </div>
        <div className="grid md:grid-cols-2 p-4 gap-4">
          <div className="bg-white rounded">
            <h3>Hello</h3>
          </div>
          <div className="bg-white  rounded">
            <h3>Hello</h3>
          </div>
        </div>
      </section>
      <article className="p-4 bg-slate-200 grid md:grid-cols-2 gap-4">
        <div className="flex justify-center m-4 p-4">
          <Carousel className="p-4 m-4 w-[70vw]">
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
                        <Link to={client.link} className="pr-2">
                          <Button>Lets Go!</Button>
                        </Link>
                        <Button
                          onClick={() => {
                            setSelection(client.title);
                          }}
                        >
                          More Info
                        </Button>
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
        <section>
          <div className="grid md:grid-cols-4 gap-4 p-4">
            <div className="bg-slate 400 p-4 rounded">
              <h3 className="text-2xl text-center">Placeholder</h3>
              <p>You have selected</p>
            </div>
          </div>
        </section>
      </article>
      <section>
        <h3 className="text-3xl">Testing</h3>
        <div className="grid md:grid-cols-4 gap-4 p-4">
          <div className="bg-slate 400 p-4 rounded">
            <h3 className="text-2xl text-center">Placeholder</h3>
          </div>
        </div>
      </section>
    </main>
  );
}
