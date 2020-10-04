/* Framework */
import Link from 'next/link';
import React from 'react';

class ContactButton extends React.Component {
    constructor(props) {
        super(props);
       this.state ={
           links :[
               {
                title:"Contact",
                link:"/"
               },
           ]
       }
    }

    render() {
        const {links} = this.state;

        return (
          <>
            {links.map((data) => (
            <div className="py-2 hover-ing">
              <Link href={data.link}>
                <a target="_blank">
                🖖🏻 <span>{data.title}</span>
                </a>
              </Link>
            </div>
            ))}
          </>
        );
    }
}

export default ContactButton;