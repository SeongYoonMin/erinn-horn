import { Link } from "@tanstack/react-router";

const Header = () => {
  return (
    <header className="py-3 w-full shadow-md">
      <div className="flex gap-5 items-center justify-center w-full">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link to="/horn" className="[&.active]:font-bold">
          Horn
        </Link>
      </div>
    </header>
  );
};

export default Header;
