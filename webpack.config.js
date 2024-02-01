const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

let pages = [];
for (let i = 0; i < 10; i++) {
  pages.push(
    new HtmlWebpackPlugin({
      filename: i + ".html",
      template: "./src/number.njk",
      templateParameters: {
        number: i,
      },
    })
  );
}

module.exports = {
  // mode: 'development',
  entry: "./src/index.js",
  output: {
    // dirname annab alati täispika asukoha
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.njk$/,
        use: [
          {
            loader: "simple-nunjucks-loader",
            options: {},
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./src/index.html",
    }),
    ...pages, // pages[0], pages[1] jne
  ],
};
