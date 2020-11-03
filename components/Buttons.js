/* Framework */
import React from "react";
import Link from "next/link";

const Buttons = (data) => (
  <div className="py-2 hover-ing">
    <Link href={data.link}>
      <a>
        {data.emoji} <span>{data.title}</span>
      </a>
    </Link>
  </div>
);

export default Buttons;
