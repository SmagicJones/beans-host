import { NewTab } from "../components/NewTab";

import { Button } from "../components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../components/ui/hover-card";

export default function Play() {
  return (
    <main>
      <section>
        <div className="grid grid-cols-4">
          <div className="grid grid-cols-1">
            <div className="flex justify-evenly items-center">
              <div className="bg-slate-500 h-8 w-8 animate-spin">
                <h3 className="text-center text-2xl">B</h3>
              </div>
              <div className="bg-slate-500 h-8 w-8 animate-spin">
                <h3 className="text-center text-2xl">O</h3>
              </div>
              <div className="bg-slate-500 h-8 w-8 animate-spin">
                <h3 className="text-center text-2xl">B</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-center lg:text-8xl md:text-4xl sm:text-2xl">
          Welcome's you to Play Time
        </h1>
      </section>
      <section>
        <div className="columns-4 hover:columns-2 transition ease-in-out">
          <div className="bg-slate-300">Hi</div>
          <div className="bg-slate-300">Hi</div>
          <div className="bg-slate-300">Hi</div>
          <div className="bg-slate-300">Hi</div>
        </div>
        <NewTab />
      </section>

      <section style={{ padding: "50px" }}>
        <main className="bg-slate-500 p-4">
          <Carousel
            opts={{
              align: "center",
            }}
          >
            <CarouselContent>
              <CarouselItem>Bobby</CarouselItem>
              <CarouselItem>Is</CarouselItem>
              <CarouselItem>Super cool</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </main>
      </section>
      <div className="flex justify-center">
        <HoverCard>
          <HoverCardTrigger>
            <Button>Hover</Button>
          </HoverCardTrigger>
          <HoverCardContent>Well done this now shows!</HoverCardContent>
        </HoverCard>
      </div>
    </main>
  );
}
