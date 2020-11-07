/* Framework */
import React from "react";

/* Loader */
import Loader from "react-loader-spinner";

export default function Loading() {
  return (
    <>
      <Loader
        className="loader"
        type="Triangle"
        color="#007bff" /* Primary */
        height={200}
        width={200}
        timeout={1000}
      />
    </>
  );
}
