var path = require('path');
var webpack = require('webpack');
var webpackTargetElectronRenderer = require('webpack-target-electron-renderer');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var BUILD_DIR = path.resolve(__dirname, './public');
var CLIENT_DIR = path.resolve(__dirname, './app/client');
var APP_DIR = path.resolve(__dirname, './app/main');

// var alias = {
//   common: COMMON_DIR
// };
module.exports = {
    //Change to 'eval' for quick hot reloading, use 'source-map' else.
   // devtool: 'source-map',
    //devtool: 'source-map',
    devtool: 'eval',
    //devtool : 'inline-source-map',
    
    //debug: 'true',
    //entry: ['webpack/hot/dev-server','babel-polyfill',CLIENT_DIR + "/index.js",CLIENT_DIR + "/splash.js",APP_DIR + "/lib/index.js"],
    entry: {bundle : ['webpack/hot/dev-server','babel-polyfill',CLIENT_DIR + "/index.js"],main : APP_DIR + "/index.js"},
    output: {
        path: __dirname + '/public/',
        publicPath: 'http://localhost:8080/client/',
        filename: '[name].js',
        sourceMapFilename: '[name].js.map',
        chunkFilename: '[id].chunk.js',
        //Add devtool mapping to map full path in source map. (Only required to debug application)
        devtoolModuleFilenameTemplate: function(info){
            return "file:///"+info.absoluteResourcePath;
            }
    },
    devServer: {
        contentBase: './client',
        publicPath: 'http://localhost:8080/client/'
    },
    resolve: {
         extensions: ['.ts', '.js', '.json', '.css', '.html', '.jsx']
       // alias: alias,
       
        // modulesDirectories: ['src', 'src/js', 'web_modules', 'bower_components', 'node_modules']
    },
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                include: [APP_DIR, CLIENT_DIR],
                loader: 'babel-loader',
                exclude: /(node_modules|semantic|semantic-react)/
            },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.node$/, loader: 'node-loader' },
            { test: /\.less$/, loader: 'style!css!less' },
            {test: /\.css/, loader: 'style-loader!css-loader!less-loader'},
            { test: /\.ts$/, loader: 'ts-loader' },
        ]
    },
    
    node: {
        console: true,
        debug: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        //TO resolve __filename and __dirname 
        __filename: false,
        __dirname: false
    },
    target: 'node',
    externals: [
        (function () {
        var IGNORES = [
            'electron',
            'winston',
            'redis',
            'about-window'
        ];
        return function (context, request, callback) {
            if (IGNORES.indexOf(request) >= 0) {
            return callback(null, "require('" + request + "')");
            }
            return callback();
        };
        })()
    ],
    plugins: [
       
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //     compressor: {
        //         warnings: false
        //     },
        //     minimize: true 
        // })
        //,
        // new webpack.DefinePlugin({
        //      'process.env.NODE_ENV': JSON.stringify('development')
        // })
    ],
    cache : true    
}