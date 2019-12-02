const path = require('path');

module.exports = {
  mode: 'development',
  entry: {app: './src/index.tsx'},
  output: {
    filename: 'bundle.js',
    library: ['com', 'example'],
    libraryTarget: 'umd',
    path: `${__dirname}/public`,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'json'],
  },
  devServer: {
    open: true,
    openPage: 'index.html',
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true,
    port: 8080,
  },
  devtool: 'inline-source-map',
};
