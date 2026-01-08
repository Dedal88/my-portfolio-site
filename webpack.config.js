const path = require('path'); // Для работы с путями

module.exports = {
  // Режим разработки (исправляет warning)
  mode: 'development',

  //////////////////////////////////
  // Разные entry points для разных страниц
  entry: {
    main: './src/index.js', // Для index.html
    certificates: './src/pages/certificates/script.js', // Для certificates.html
  },

  output: {
    // Используем [name] для создания разных файлов
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  devtool: 'eval-source-map',
  /////////////////////////////

  // Настройка loaders для обработки JS (ES6+)
  module: {
    rules: [
      {
        test: /\.js$/, // Для всех .js файлов
        exclude: /node_modules/, // Исключаем node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  modules: 'commonjs',
                },
              ],
            ],
          },
        },
      },
    ],
  },

  // Разрешение расширений (чтобы Webpack находил .js файлы)
  resolve: {
    extensions: ['.js'],
  },

  // Режим watch (опционально, можно оставить в команде)
  watch: true, // Автоматическая пересборка при изменениях
};
