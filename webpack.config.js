const HtmlWebPackPlugin    = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//const CopyPlugin           = require('copy-webpack-plugin')


module.exports = {

    mode: 'development',
    module: {
        rules: [
            {
               test:/\.css$/,
               exclude:/styles\.css$/,
               use:[
                'style-loader',
                'css-loader'
               ] 
   
        },
        {
            test:/styles\.css$/,
               use:[
                MiniCssExtractPlugin.loader,
                'css-loader'
               ]  
        },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: false }
                    }
                ]
            },
            // {
            //     test:/\.(png|svg|jpg|gif)$/,
            //     use:[
            //         {
            //             loader:'file-loader',
            //             options:{
            //                 esModule: false
            //             }
            //         }
            //     ]
            // }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css',
            ignoreOrder:false
        }),
        // new CopyPlugin ([
        //     {
        //        from: 'src/assets', to:'assets/'
        //     }
        // ])
    ]

}

