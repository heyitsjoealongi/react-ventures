/* Framework */
import React from "react";

/* Bootstrap Components */
import { Col } from "reactstrap";

class ProjectOneHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [
        {
          heading: "Lorem duis ipsum irure",
          paragraph_one:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          paragraph_two:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          paragraph_three:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
    };
  }

  render() {
    const { content } = this.state;

    return (
      <>
        {content.map((data) => (
          <Col lg={{ size: 12 }} className="content">
            <h3 className="display-5 py-2">{data.heading}</h3>
            <p className="lead">{data.paragraph_one}</p>
            <p className="py-2">{data.paragraph_two}</p>
            <p className="py-2">{data.paragraph_three}</p>
          </Col>
        ))}
      </>
    );
  }
}

export default ProjectOneHeader;
