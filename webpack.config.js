const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body",
    }),
  ],
  devServer: {
    open: true,
    hot: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },
  watch: true,
  devtool: "inline-source-map",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
