const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const BabiliPlugin = require('babili-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = (env) => {
  const isProduction = env === 'production'
  console.log('Production environment:', isProduction)
  return {
    entry: {
      guestApp: ['babel-polyfill', './frontend/src/guestApp/index.js'],
      employeeApp: ['babel-polyfill', './frontend/src/employeeApp/index.js'],
      managerApp: ['babel-polyfill', './frontend/src/managerApp/index.js'],
    },
    // ['babel-polyfill', './frontend/src/guestView/index.js'],
    output: {
      path: path.resolve(__dirname, 'frontend', 'dist'),
      filename: '[name]/js/bundle.js'
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'img/'
              }  
            }
          ]
        },
        {
          test: /\.s?css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : MiniCssExtractPlugin.loader, // 'style-loader'
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
                // minimize: true // This doesn't really do much
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
                // minimize: true // This doesn't really do much
              }
            }
          ]
        }
      ]
    },
    devServer: {
      // contentBase: './frontend/dist/',
      historyApiFallback: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'guestApp/index.html',
        template: './frontend/src/guestApp/index.html',
        chunks: ['guestApp']
      }),
      new HtmlWebpackPlugin({
        filename: 'employeeApp/index.html',
        template: './frontend/src/employeeApp/index.html',
        chunks: ['employeeApp']
      }),
      new HtmlWebpackPlugin({
        filename: 'managerApp/index.html',
        template: './frontend/src/managerApp/index.html',
        chunks: ['managerApp']
      }),
      new MiniCssExtractPlugin({
        filename: '[name]/css/styles.css',
        chunkFilename: '[name]/css/styles.css'
      }),
      new BundleAnalyzerPlugin(),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/) // Don't bundle locale files in moment. Saves almost 200kB
    ],
    // optimization: {
    //   minimizer: [
    //     new UglifyJsPlugin(), // This doesn't really do much
    //     new BabiliPlugin() // This doesn't really do much
    //   ]
    // },
    devtool: isProduction ? 'source-map' : 'inline-source-map'
  }
}
