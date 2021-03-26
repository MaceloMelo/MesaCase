
module.exports = {
  devServer: {
    proxy: 'https://maps.googleapis.com',
    changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
  }
}