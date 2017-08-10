const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})

const settings = {
  entry: {
    bundle: [
      'babel-polyfill',      
      'react-hot-loader/patch',
      'react',
      'react-dom',
      './app/index.js'
    ]
  },
  output: {
    filename: "[name].js",
    publicPath: "/",
    path: path.resolve("build")
  },
  resolve: {
    extensions: [".js", ".json", ".css"]
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: path.join(__dirname, "node_modules/d3"),  
        options: {
          presets: [
            ["es2015", { modules: false }],
            "stage-2",
            "react"
          ],
          plugins: [
            "transform-node-env-inline"
          ],
          env: {
            development: {
              plugins: ["react-hot-loader/babel"]
            }
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: "[name]--[local]--[hash:base64:8]"
            }
          },
          "postcss-loader" // has separate config, see postcss.config.js nearby
        ]
      },
      { 
       test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  devServer: {
    disableHostCheck: true
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      minimize: true,
      beautify: false,
      comments: false,
      debug: false,
      compress: {
        warnings: false,
        drop_console: true,
        drop_debugger: true,
        unused: true,
        dead_code: true
      },
      mangle: {
        except: ['webpackJsonp'],
        screw_ie8: true,
        top_level: true,
        keep_fnames: false
      },
      output: {
        comments: false
      }
    })
  ],
};

module.exports = settings;