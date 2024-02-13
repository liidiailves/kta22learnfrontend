const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
    rules: [],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
