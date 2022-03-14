const path = require("path");

module.exports = {
  //   mode: "development",
  entry: "./src/index.ts",
  watch: true,
  devtool: "source-map",
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
    library: {
      name: "FyStudio",
      type: "umd",
    },
  },
};
