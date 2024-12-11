import { NewTab } from "../components/NewTab";
import { Carousel } from "../components/Carousel";

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
        {/* <Carousel /> */}
      </section>
    </main>
  );
}
