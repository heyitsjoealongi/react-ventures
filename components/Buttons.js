/* Framework */
import * as React from "react";
import Link from "next/link";

export const Buttons = (data) => (
  <>
    <div className="py-2 hover-ing">
      <Link href={data.link}>
        {data.emoji} <span>{data.title}</span>
      </Link>
    </div>
  </>
);
