/* Framework */
import * as React from "react";

/* Packaged Styles */
import "bootstrap/dist/css/bootstrap.css";

/* Theme Styles */
import "../styles/theme.css";
import "../styles/utilities.css";

// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
