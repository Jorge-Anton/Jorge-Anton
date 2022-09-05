const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const katex = require("katex");

module.exports = (config) => {
    config.addPlugin(syntaxHighlight)
    config.addPassthroughCopy({"src/assets": "assets"});
    config.addPassthroughCopy("src/admin");
    config.setFrontMatterParsingOptions({
        excerpt: true,
        excerpt_separation: "<!-- excerpt -->",
    });
    // config.setTemplateFormats(["jpg", "png", "webp", "md", "njk"]);
    config.setBrowserSyncConfig({
        files: ["dist/**/*"],
        open: true,
    });
    config.setDataDeepMerge(true);

    // config.addFilter("latexCenter", (content) => {
    //     return content.replace(/\$\$(.+?)\$\$/g, (_, equation) => {
    //         let cleanEquation = equation.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
      
    //         return katex.renderToString(cleanEquation, { throwOnError: false });
    //     });
    // });

    // config.addFilter("latex", (content) => {
    //     return content.replace(/\$(.+?)\$/g, (_, equation) => {
    //         cleanEquation = equation.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    //         return katex.renderToString(cleanEquation, { throwOnError: false});
    //     });
    // });

    return {
        dir: {
            input: "src",
            output: "dist",
        },
    };
};