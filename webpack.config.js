const path = require("path");

module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    filename: "index.js",
    path: path.join(__dirname, "dist"),
    publicPath: "/dist/"
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minChunks: 2
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
{ test: /\.js$/,
  loader: 'babel-loader',
  query: {
    // react needed for JSX syntax
    // es2015 needed for modules
    presets: ['react', 'es2015'],
    plugins: ['react-intl'],
    cacheDirectory: true
  },
  exclude: /node_modules|bower_components/
}
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};
