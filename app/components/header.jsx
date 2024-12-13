import { NavLink } from "@remix-run/react";

export default function Header() {
  return (
    <header className="grid grid-cols-1">
      <div className="bg-purple-300 p-4">
        <h1 className="lg:text-8xl md:text-4xl sm:text-2xl text-center">
          Welcome to Boblogs
        </h1>
        <nav className="flex justify-between p-2 items-center sm:grid sm:grid-cols-1 sm:gap-4">
          <NavLink
            to="/tasteofturkey"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Taste of Turkey
          </NavLink>
          <NavLink
            to="/bridgefest"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Bridgefest
          </NavLink>
          <NavLink
            to="/music"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Music
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
