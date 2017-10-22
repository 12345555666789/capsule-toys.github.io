let path=require('path');
let htmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry: './src/index.js',
    output: {
        filename: "bundle.js",
        path:path.resolve('dist')
    },
    module: {
        rules:[
            {
                test:/\.js$/,use:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.less$/,use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.css$/,use:['style-loader','css-loader']
            },
            {test:/\.(jpg|gif|jpge|png)/,use:'url-loader'}
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    devtool: "source-map",
    devServer: {
        proxy:{
            '/api':'http://localhost:3000'
        }
    }
};