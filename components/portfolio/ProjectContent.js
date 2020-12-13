/* Framework */
import React from "react";

const ProjectContent = (data) => (
  <>
    <h3 className="display-5 py-2">{data.heading}</h3>
    <p className="lead">{data.paragraph_one}</p>
    <p className="py-2">{data.paragraph_two}</p>
    <p className="py-2">{data.paragraph_three}</p>
  </>
);

export default ProjectContent;
