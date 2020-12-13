import Link from 'next/link'

import React, { useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="primary" dark expand="md">
        <Link href="/">
          <NavbarBrand><img className="py-1" src="http://via.placeholder.com/25x25" alt=""></img> React Ventures</NavbarBrand>
        </Link>
      </Navbar>
    </div>
  );
}

export default Navigation;
