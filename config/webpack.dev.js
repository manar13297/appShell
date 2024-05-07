const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('../package.json').dependencies;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = merge(common, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
        clean: true,
        publicPath: 'http://localhost:3000/'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '../dist'),
        },
        compress: true,
        port: 3000,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'assets', to: 'assets' }
            ]
        }),
        new ModuleFederationPlugin({
            name: 'container',
            shared: {
                ...deps,
                react:{
                    singleton: true,
                    requiredVersion: deps.react,
                },
                "react-dom":{
                    singleton: true,
                    requiredVersion: deps["react-dom"],
                }

            },
            remotes: {},
        }),
    ]
});
