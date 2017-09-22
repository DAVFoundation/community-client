const path = require('path')

module.exports = {
  entry: {
    app:'./src/index.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module:{
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        //loaders processes in reverse order
        use: [
          'style-loader', // outputs css in embedded style tag in doc
          'css-loader',   // parses css into javascript in bundle
          'sass-loader'   // transforms sass into css
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000    // convert images <10k to base64 strings
            }
          }
        ]
      }
    ]
  }
}