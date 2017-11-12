module.exports = {
    entry: './callback-terminal.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['babel-preset-env']
                }
            }
        ]
    }
}