const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // CSS拆分
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 从根目录走
function resolve (dir) {
  return path.join(__dirname, '..', dir);
}
module.exports = {
  context: path.resolve(__dirname, '../'), // 入口起点根目录
  entry: {
    app: './src/index.js'
  },
  output: {
    path: resolve('build'),
    filename: '[name].js'
  },
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-class-properties']
            }
          },
          'eslint-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }), // 主要这里的路径是相对上下文的路径
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: 'static/css/[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false // Enable to remove warnings about conflicting order
    }),
    new CleanWebpackPlugin()
  ]
};
