
module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://maps.googleapis.com',
        ws: true,
        changeOrigin: true
      },
    }
  }
}