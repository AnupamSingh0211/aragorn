const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {

 entry: ['./samples/index.ts'],
 resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
 output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
},
devServer: {
    contentBase: path.join(__dirname, 'dist')
},
plugins: [
    new HtmlWebpackPlugin(
        {
            template: './src/index.html'
        }
    )

],
module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
            {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/,
            },
    ]
}


 //entry point
//output
//loaders
//plugins
};