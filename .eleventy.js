module.exports = async function (eleventyConfig) {

    const { HtmlBasePlugin } = await import("@11ty/eleventy");
    const { eleventyImageTransformPlugin } = await import("@11ty/eleventy-img");

	eleventyConfig.addPlugin(HtmlBasePlugin);

    eleventyConfig.addLiquidShortcode("youtube", async function (id) {
        return `<iframe class="yt-shortcode" src="https://www.youtube-nocookie.com/embed/${id}" frameborder="0" allowfullscreen></iframe>`;
    });

    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
        formats: ["avif", "webp", "jpeg"],
        widths: ["auto"],
        urlPath: "/img/",
    });

    return {
        dir: {
            input: "src",
            output: "dist",
        },
        pathPrefix: "/subdir",
    };
};