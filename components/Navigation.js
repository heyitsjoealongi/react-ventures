/* Framework */
import React from "react";
import Image from "next/image";
import Link from "next/link";

/* Components */
import { Navbar, NavbarBrand } from "reactstrap";
import DarkMode from "../utilities/darkmode/DarkMode";

const Navigation = () => {
  return (
    <div>
      <Navbar color="primary" dark expand="md">
        <Link href="/">
          <a className="hover-er">
            <NavbarBrand>
              <Image
                src="/brand-icon.svg"
                className="icon"
                alt="Brand Icon"
                width={25}
                height={25}
                loading="lazy"
              />
              <span>React Ventures</span>
            </NavbarBrand>
          </a>
        </Link>
        <DarkMode />
      </Navbar>
    </div>
  );
};

export default Navigation;
