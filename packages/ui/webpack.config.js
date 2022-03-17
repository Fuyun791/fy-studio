const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  externals: {
    react: "react",
    "react-dom": "react-dom",
    // "react-is": "react-is",
  },
  // mode: "development",
  mode: "production",
  entry: "./src/index.ts",
  // watch: true,
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "lib"),
    globalObject: "this",
    umdNamedDefine: true,
    library: {
      name: "FyStudio",
      type: "umd",
    },
  },
};
