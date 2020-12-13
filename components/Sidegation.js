/* Framework */
import * as React from "react";
import Link from "next/link";

export const Sidegation = () => {
  return (
    <>
      <ul className="list-unstyled">
        <li>
          <Link href="/team" className="hover-est">
            👻 <span>Team</span>
          </Link>
        </li>
        <li>
          <Link href="/portfolio" className="hover-est">
            💻 <span>Portfolio</span>
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover-est">
            🤙 <span>Contact</span>
          </Link>
        </li>
      </ul>
    </>
  );
};
