/* eslint-disable no-param-reassign */
module.exports = {
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      return args
    })
  },
}
