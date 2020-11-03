/* Framework */
import Head from "next/head";

function Meta() {
  return (
    <div>
      <Head>
        <title>React Ventures</title>
        <meta
          name="description"
          content="Open Source React Ventures for building applications in React.js with Bootstrap utilizing the Next.js framework (Vercel) for simplified Node.js configuration."
        />
        <meta property="og:url" content="https://react-ventures.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="React Ventures" />
        <meta
          property="og:description"
          content="Open Source React Ventures for building applications in React.js with Bootstrap utilizing the Next.js framework (Vercel) for simplified Node.js configuration."
        />
        <meta
          property="og:image"
          content="https://react-ventures.vercel.app/brand-placeholder.png"
        />
        <meta
          property="twitter:url"
          content="https://react-ventures.vercel.app/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="React Ventures" />
        <meta
          name="twitter:description"
          content="Open Source React Ventures for building applications in React.js with Bootstrap utilizing the Next.js framework (Vercel) for simplified Node.js configuration."
        />
        <meta
          name="twitter:image"
          content="https://react-ventures.vercel.app/brand-placeholder.png"
        />
      </Head>
    </div>
  );
}

export default Meta;
