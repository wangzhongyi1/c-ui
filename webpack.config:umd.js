const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js',
        'c-button': './src/components/c-button/index.js',
        'c-input': './src/components/c-input/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'lib'),
        clean: true,
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            // ... 其它规则
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    devtool: 'source-map',
    externals: {
        vue: 'vue'
    }
}
