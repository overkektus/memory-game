const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')
const path = require('path')

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    [
      'import',
      { libraryName: 'antd', libraryDirectory: 'es', style: true }, // change importing css to less
    ],
    config,
  )
  config.resolve.modules = [path.resolve('.').concat(config.resolve.modules)]
  config = rewireLess.withLoaderOptions({
    modifyVars: { '@primary-color': '#1DA57A' },
    javascriptEnabled: true,
  })(config, env)
  return config
}
