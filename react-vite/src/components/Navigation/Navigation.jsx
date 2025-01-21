import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";

export default function Navigation() {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <ul className="flex gap-8 items-center max-w-7xl mx-auto text-white">
        {/* Home Link */}
        <li>
          <ProfileButton />
        </li>
        <li>
          <NavLink 
            to="/" 
            className="px-4 py-2 text-lg font-semibold hover:bg-gray-700 rounded transition"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/map" 
            className="px-4 py-2 text-lg font-semibold hover:bg-gray-700 rounded transition"
          >
            Map
          </NavLink>
        </li>

        {/* Profile Button */}
      </ul>
    </nav>
  );
}
