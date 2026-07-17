const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: isProduction ? 'production' : 'development',
    entry: {
      main: './src/index.js',
      certificates: './src/pages/certificates/certificates.js',
      portfolio: './src/pages/portfolio/portfolio.js',
      experience: './src/pages/experience/experience.js',
    },
    output: {
      filename: isProduction
        ? '[name].[contenthash].bundle.js'
        : '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      publicPath: './',
    },
    devtool: isProduction ? false : 'eval-source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: '> 0.5%, not dead, not ie 11',
                    useBuiltIns: 'usage',
                    corejs: '3.47.0',
                    modules: 'commonjs',
                  },
                ],
              ],
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'img/[name][ext]',
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html',
        chunks: ['main'],
        inject: 'body',
        publicPath: './',
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/certificates/certificates.html',
        filename: 'src/pages/certificates/certificates.html',
        chunks: ['certificates'],
        inject: 'body',
        publicPath: '../../../',
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/experience/experience.html',
        filename: 'src/pages/experience/experience.html',
        chunks: ['experience'],
        inject: 'body',
        publicPath: '../../../',
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/portfolio/portfolio.html',
        filename: 'src/pages/portfolio/portfolio.html',
        chunks: ['portfolio'],
        inject: 'body',
        publicPath: '../../../',
      }),
      new MiniCssExtractPlugin({
        filename: isProduction ? '[name].[contenthash].css' : '[name].css',
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'src/img',
            to: 'src/img',
            noErrorOnMissing: true,
          },
        ],
      }),
    ],
    watch: !isProduction,
  };
};
