const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
  //   mode: 'development',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
    open: true,
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
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./src/index.html",
    }),
    ...pages, //pages[0], pages[1], ...
  ],
};