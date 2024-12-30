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

import { LoginForm } from "../components/login-form";

import { AppSidebar } from "../components/app-sidebar";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";

import { Separator } from "../components/ui/separator";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../components/ui/sidebar";

import { clients } from "../data/clients.js";
import { useState } from "react";

export default function Bobby() {
  const [selection, setSelection] = useState("BobLand");

  return (
    <main>
      <article className="p-4 bg-slate-200 grid md:grid-cols-1 gap-4">
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
                        <Button onClick={() => setSelection(client.title)}>
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
          <div className="grid grid-cols-1 gap-4 p-4">
            <div className="bg-slate 400 p-4 rounded">
              <h3 className="text-4xl text-center p-2">{selection}</h3>

              {selection === "TunaLand" ? (
                <div className="bg-purple-300 text-white p-4 rounded">
                  <p>Welcome to Tuna Land, its a place for tuna to land</p>
                  <p>
                    A Place for everyone who really likes Tuna and everything to
                    do with it.{" "}
                  </p>
                </div>
              ) : selection === "BobLand" ? (
                <div className="bg-purple-300 text-white p-4 rounded">
                  <p>Welcome to Bob Land, its a place for tuna to land</p>
                  <p>
                    A Place for everyone who really likes Tuna and everything to
                    do with it.{" "}
                  </p>
                </div>
              ) : selection === "BurgerLand" ? (
                <div className="bg-purple-300 text-white p-4 rounded">
                  <p>Welcome to Burger Land, its a place for tuna to land</p>
                  <p>
                    A Place for everyone who really likes Tuna and everything to
                    do with it.{" "}
                  </p>
                </div>
              ) : (
                <></>
              )}
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

      <section>
        <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
          <div className="w-full max-w-sm md:max-w-3xl">
            <LoginForm />
          </div>
        </div>
      </section>
    </main>
  );
}
