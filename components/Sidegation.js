import Link from "next/link";

function Sidegation() {
  return (
    <ul className="list-unstyled">
      <li>
        <Link href="/team">
          <a className="hover-est">
            🦄 <span>Team</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/portfolio">
          <a className="hover-est">
            💻 <span>Portfolio</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a className="hover-est">
            🖖🏻 <span>Contact</span>
          </a>
        </Link>
      </li>
    </ul>
  );
}

export default Sidegation;
