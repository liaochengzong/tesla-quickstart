// You can see all the config in `./configs`.
let webpackConfig;
module.exports = env => {
  switch (env.NODE_ENV) {
    case 'common-weex':
      webpackConfig = require('./configs/webpack.common.conf');
      break;
    case 'common-wx':
      webpackConfig = require('./configs-wx/webpack.dev.conf');
      break;
  }
  return webpackConfig;
}
