var path = require('path');

module.exports = [{
    mode: 'production',
    entry: './source/app.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app_bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },
},{
    mode: 'production',
    entry: './source/init.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'init_bundle.js'
    }
}];
//npx webpack --config webpack.config.js