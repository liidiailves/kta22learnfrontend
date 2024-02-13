const path = require("path");
const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");

module.exports = {
  //   mode: 'development',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
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
        test: /\.css$/,
        // loeb tagantpoolt, seega järjekord oluline!
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ca]ss$/,
        // loeb tagantpoolt, seega järjekord oluline!
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin(),
    new PurgeCSSPlugin({
      paths: glob.sync("./src/**/*", { nodir: true }),
    }),
  ],
};
