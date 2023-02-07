const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/", {
      target: "http://10.80.161.153:8080",
      changeOrigin: true,
    })
  );
};