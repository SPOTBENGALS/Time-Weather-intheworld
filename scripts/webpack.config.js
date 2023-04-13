const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");
const webpack = require("webpack");
const isProduction = process.env.NODE_ENV === "production";

dotenv.config();

module.exports = {
  entry: "./src/index.js",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "static/js/[name].[contenthash:8].js",
    clean: true,
  },
  devtool: isProduction ? "hidden-source-map" : "eval",
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    client: {
      overlay: true,
      progress: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.module\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|webp)$/i,
        exclude: /node_modules/,
        use: [{ loader: "file-loader" }],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
    isProduction
      ? new HtmlWebpackPlugin({
          template: "index.html",
          minify: true, // 개발에서만 쓰이는 불필요한 코드 제거(줄바꿈, 띄어쓰기, 콘솔로그, 무의미한 메서드 호출 등)
        })
      : new HtmlWebpackPlugin({ template: "index.html" }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ].filter(Boolean),
};
