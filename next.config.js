module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: "/404/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/404",
        destination: "/",
        permanent: true,
      },
      {
        source: "/404.html/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/404.html",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
