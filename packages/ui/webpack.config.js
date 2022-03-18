const path = require("path");

module.exports = {
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  // mode: "development",
  entry: "./src/index.ts",
  watch: true,
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
