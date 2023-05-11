const nextTranslate = require("next-translate-plugin");

module.exports = nextTranslate({
  reactStrictMode: true,
  legacyBrowsers: false,
  compiler: {
    styledComponents: true,
  },
});
