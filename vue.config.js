
module.exports = {
  lintOnSave: true,
  outputDir: '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://mgoogleplace.herokuapp.com',
        changeOrigin: true,
        ws: true,
        onProxyReq: function(request) {
          request.setHeader("origin", "https://maps.googleapis.com/maps/");
        },
      },
    },
  },
}; 