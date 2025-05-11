module.exports = {
  devServer: {
    // allowedHosts:'all',
    https: true,
    proxy: {
      "/api": {
        target: "https://go-buy.onrender.com/",
        changeOrigin: true,
      },
    },
    
  },
   
  // publicPath: "/Gogroupbuy/",
};
