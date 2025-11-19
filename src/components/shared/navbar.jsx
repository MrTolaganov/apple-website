import { navLinks } from "../../lib/constants.js";

export default function Navbar() {
  return (
    <header>
      <nav>
        <a href="/">
          <img src={"/logo.svg"} alt={"Apple Logo"} />
        </a>

        <ul>
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href={`/${label.toLowerCase()}`}>{label}</a>
            </li>
          ))}
        </ul>

        <div className={"flex-center gap-3"}>
          <button>
            <img src={"/search.svg"} alt={"Search"} />
          </button>
          <button>
            <img src={"/cart.svg"} alt={"Cart"} />
          </button>
        </div>
      </nav>
    </header>
  );
}
