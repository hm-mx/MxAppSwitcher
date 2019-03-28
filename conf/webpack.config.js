const paths = require("./paths");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const fs = require("fs-extra");

const isDev = process.env.MODE === "development" ? true : false;
const MODES = {
  DEV: "development",
  PROD: "production",
};

module.exports = {
  mode: isDev ? MODES.DEV : MODES.PROD,
  target: "web",
  devtool: isDev ? "eval-source-map" : false,
  watch: isDev,
  entry: paths.srcEntry,
  output: {
    path: paths.distDir,
    filename: "mxappswitcher.js",
    libraryTarget: "umd",
  },
  devServer: {
    contentBase: paths.publicDir,
    port: 3000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {loader: "postcss-loader", options: {config: {path: paths.confDir}}},
          "sass-loader",
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: `[name].[ext]`,
            },
          },
        ],
      },
    ],
  },
  plugins: _getPlugins(),
};

function _getPlugins() {
  //ensure distDir fir Archive Plugin
  fs.ensureDirSync(paths.distDir);
  const plugins = [
    new MiniCssExtractPlugin({
      filename: "mxappswitcher.css",
    }),
    //new CopyPlugin([{from: paths.distDir, to: paths.publicDir}]),
  ];

  return plugins;
}
