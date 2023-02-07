const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/auth/join", {
      target: "http://10.80.161.163:8080",
      changeOrigin: true,
    })
  );
};