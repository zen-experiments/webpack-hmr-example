'use strict';

const PATH = require('path');

const IS_DEV_SERVER = process.argv.find(v => v.includes('webpack-dev-server'));

const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT = '../';

const APP_SRC_DIR = PATH.resolve(__dirname, ROOT, 'src/');
const INDEX_JS_FILE = PATH.resolve(APP_SRC_DIR, 'index.js');
const INDEX_HTML_FILE = PATH.resolve(APP_SRC_DIR, 'index.html');
const PUBLIC_DIR = PATH.resolve(__dirname, ROOT, 'dist/public/');
const BUILD_DIR = PATH.resolve(PUBLIC_DIR, 'assets/js/');

const PUBLIC_PATH = '/'

const config = {
    cache: true,
    devtool: 'source-map',
    entry: {
        app: INDEX_JS_FILE
    },
    externals: IS_DEV_SERVER ? [] : [nodeExternals()],
    output: {
        filename: '[name].js',
        path: BUILD_DIR,
        publicPath: PUBLIC_PATH
    },
    devServer: {
        contentBase: PUBLIC_DIR,
        publicPath: PUBLIC_PATH,
        compress: true,
        watchOptions: {
            ignored: /node_modules/
        },
        port: 4000,
        historyApiFallback: true,
        watchContentBase: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: IS_DEV_SERVER ? 'index.html' : '../../index.html',
            cache: true,
            inject: false,
            template: INDEX_HTML_FILE
        })
    ]
};

module.exports = config;
