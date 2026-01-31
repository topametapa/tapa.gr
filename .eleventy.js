module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/sitemap.xml");

  eleventyConfig.addFilter("currentYear", () => new Date().getFullYear());

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Date filters for blog
  eleventyConfig.addFilter("dateIso", (date) => {
    return new Date(date).toISOString().split('T')[0];
  });

  eleventyConfig.addFilter("dateFormat", (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('el-GR', options);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts",
      data: "_data",
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
