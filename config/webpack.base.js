const path = require('path');
const fs = require('fs');

const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, '../src/ant-theme-vars.less'), 'utf8'));

module.exports = {
    entry: path.resolve(__dirname, '../src/index.jsx'),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            _History: path.resolve(__dirname, "../src/helpers/history")
        }
    },

    module: {
        rules: [{
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: ["babel-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    {
                        loader: "less-loader",
                        options: {
                            modifyVars: {
                                'primary-color': 'rgba(0, 255, 0, 0.15)',
                                'link-color': 'rgba(255, 0, 0, 0.15)',
                                'border-radius-base': '2px',

                            },
                            javascriptEnabled: true,
                        },
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ],
    }
}