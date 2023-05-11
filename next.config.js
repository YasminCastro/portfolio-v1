const nextTranslate = require("next-translate-plugin");

module.exports = nextTranslate({
  compiler: {
    styledComponents: true,
    reactStrictMode: true,
    legacyBrowsers: false,
  },
});
