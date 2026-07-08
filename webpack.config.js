const path = require('path');

module.exports = {
  mode: 'development',

  entry: {
    main: './src/index.js',
    certificates: './src/pages/certificates/certificates.js',
    portfolio: './src/pages/portfolio/portfolio.js',
    experience: './src/pages/experience/experience.js',
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  devtool: 'eval-source-map',

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
    ],
  },

  resolve: {
    extensions: ['.js'],
  },

  watch: true,
};
