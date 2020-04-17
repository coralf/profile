module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3000/",
        changOrigin: true
      }
    },
  },

}
