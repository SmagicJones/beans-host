import { NavLink } from "@remix-run/react";

export default function Header() {
  return (
    <header className="grid grid-cols-1">
      <div className="bg-purple-300 p-4">
        <h1 className="lg:text-8xl md:text-4xl sm:text-2xl text-center">
          Welcome to Boblogs
        </h1>
        <nav className="flex justify-between p-2 items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tasteofturkey">Taste of Turkey</NavLink>
          <NavLink to="/bridgefest">Bridgefest</NavLink>
          <NavLink to="/music">Music</NavLink>
        </nav>
      </div>
    </header>
  );
}
