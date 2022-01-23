const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlFiles = ["index.html", "advanced_search.html", "toocle_images.html"];
const htmlPluginFileConfig = htmlFiles.map(
  (filename) =>
    new HtmlWebpackPlugin({
      filename,
      template: `./src/HTML/${filename}`,
    })
);

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.bundle.js",
  },
  module: {
    rules: [{ test: /\.html$/, use: "html-loader" }],
  },
  plugins: htmlPluginFileConfig,
};
