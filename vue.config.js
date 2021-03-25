
module.exports = {
  devServer: {
    proxy: 'https://mgoogleplace.herokuapp.com',
    ws: true,
    changeOrigin: true
  }
}