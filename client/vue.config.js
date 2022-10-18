let path = require("path");
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/api",
        },
      },
    },
  },
  configureWebpack: (config) => {
    config.resolve = {
      extensions: [".js", ".vue", ".json"],
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    };
  },
};
