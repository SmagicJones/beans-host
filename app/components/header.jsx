import { NavLink } from "@remix-run/react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="grid grid-cols-1">
      <div className="bg-purple-300 p-4">
        <h1 className="lg:text-8xl md:text-4xl sm:text-2xl text-center">
          Welcome to Boblogs
        </h1>
        <nav className="p-2 flex justify-between">
          <NavLink to="/tasteofturkey">
            <Button>Taste Of Turkey</Button>
          </NavLink>
          <NavLink to="/bridgefest">
            <Button>Bridgefest</Button>
          </NavLink>
          <NavLink to="/music">
            <Button>Music</Button>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
