/* Framework */
import Link from "next/link";
import React from "react";

class ContactButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          title: "LinkedIn",
          link: "/",
        },
        {
          title: "Twitter",
          link: "/",
        },
        {
          title: "Email",
          link: "/",
        },
      ],
    };
  }

  render() {
    const { links } = this.state;

    return (
      <>
        {links.map((data) => (
          <div className="py-2 hover-ing">
            <Link href={data.link}>
              <a target="_blank">
                🔗 <span>{data.title}</span>
              </a>
            </Link>
          </div>
        ))}
      </>
    );
  }
}

export default ContactButtons;
