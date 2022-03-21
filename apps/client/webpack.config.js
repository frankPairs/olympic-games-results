const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {
  const mode = env ? env.NODE_ENV : 'development'
  const config = require(`./configs/webpack/${mode}.js`)

  return merge(
    {
      mode,
      entry: './src/index.jsx',
      output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
        globalObject: 'this'
      },
      resolve: {
        extensions: ['.jsx', '.js'],
        modules: [path.resolve('./src'), 'node_modules']
      },
      module: {
        rules: [
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
          },
          {
            test: /\.m?js?x$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react', '@babel/preset-env']
              }
            }
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html'
        })
      ]
    },
    config
  )
}
