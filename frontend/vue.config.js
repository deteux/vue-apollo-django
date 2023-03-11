
var BundleTracker = require("webpack-bundle-tracker");
var WriteFilePlugin = require("write-file-webpack-plugin");

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/static/"
      : "http://127.0.0.1:8080",

  outputDir: "./dist/",

  transpileDependencies: true,
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept, Accept-Encoding, Accept-Language, Access-Control-Request-Headers, Access-Control-Request-Method",
      "Access-Control-Allow-Credentials": "true",
    },
  },
  chainWebpack: (config) => {
    // config.optimization.splitChunks(false);
    config.module.rule("vue").use("vue-loader");
  },

  configureWebpack: {
    entry: "./src/main.js",
    output: {
      filename: "js/[name].js",
      chunkFilename: "js/[name].js",
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "/img/[name].[ext]",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      // new VueLoaderPlugin(),
      new WriteFilePlugin(),
      process.env.NODE_ENV === "production"
        ? new BundleTracker({
            filename: "webpack-stats-prod.json",
            publicPath: "/",
          })
        : new BundleTracker({
            filename: "webpack-stats.json",
            publicPath: "http://localhost:8080/",
          }),
    ],
  },
};
