/* Framework */
import * as React from "react";
import Head from "next/head";

export const Meta = () => {
  return (
    <>
      <Head>
        <title>React Ventures</title>
        <meta name="title" content="react-ventures" />
        <meta name="application-name" content="react-ventures" />
        <meta
          name="description"
          content="Open Source React Ventures for building applications in React.js with Bootstrap utilizing the Next.js framework (Vercel) for simplified Node.js configuration."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://react-ventures.vercel.app/" />
        <meta property="og:title" content="react-ventures" />
        <meta
          property="og:description"
          content="Open Source React Ventures for building applications in React.js with Bootstrap utilizing the Next.js framework (Vercel) for simplified Node.js configuration."
        />
        <meta
          property="og:image"
          content="https://react-ventures.vercel.app/react-ventures.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@" />
        <meta property="twitter:url" content="https://react-ventures.vercel.app/" />
        <meta property="twitter:title" content="react-ventures" />
        <meta
          property="twitter:description"
          content="Open Source React Ventures for building applications in React.js with Bootstrap utilizing the Next.js framework (Vercel) for simplified Node.js configuration."
        />
        <meta
          property="twitter:image"
          content="https://react-ventures.vercel.app/react-ventures.png"
        />
      </Head>
    </>
  );
};
