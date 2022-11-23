// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// export
module.exports = {
    // 파일을 읽어들이기 시작하는 진입점 설정
    entry: './js/main.js',
    
    // 결과물(번들)을 반환하는 설정
    output: {
        path: path.resolve(__dirname, 'dist'),  // 결과파일의 위치
        filename: 'main.js',                    // 결과파일이름
        clean:true  // 이전에 만들어 놓은 설정을 삭제하고 output결과물을 만들어줌.
    },

    module:{
        rules:[
            {
                test: /\.s?css$/,
                use:['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    },

    // 번들링 후 결과물의 처리 방식 등 다양한 프러그인들을 설정
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                {from: 'static'}
            ]
        })
    ],
    
    devServer: {
        host:'localhost'
    }
}