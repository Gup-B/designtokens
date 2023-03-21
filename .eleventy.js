
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("site/src");
  return {
    dir: {
      input: "site",
      output: "_site",
    },
  };
};
