
module.exports = {
  devServer: {
    proxy: 'https://maps.googleapis.com/',
    ws: true,
    changeOrigin: true
  }
}