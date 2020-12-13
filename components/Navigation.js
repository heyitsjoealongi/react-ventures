/* Framework */
import * as React from "react";
import Image from "next/image";
import Link from "next/link";

/* Components */
import { Navbar } from "reactstrap";
import DarkMode from "../utilities/darkmode/DarkMode";

export const Navigation = () => {
  return (
    <Navbar color="primary" dark expand="md">
      <div className="hover-er">
        <Link href="/" className="navbar-brand">
          <Image
            src="/react-ventures.svg"
            className="icon"
            alt="Brand Icon"
            width={25}
            height={25}
            loading="lazy"
          />
          <span>React Ventures</span>
        </Link>
      </div>
      <DarkMode />
    </Navbar>
  );
};
