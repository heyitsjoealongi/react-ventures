import Link from "next/link";

import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

/* SVG */
import Brand from "../public/brand.svg";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="primary" dark expand="md">
        <Link href="/">
          <a className="hover-er">
            <NavbarBrand>
              <Brand className="icon" /> <span>React Ventures</span>
            </NavbarBrand>
          </a>
        </Link>
      </Navbar>
    </div>
  );
};

export default Navigation;
