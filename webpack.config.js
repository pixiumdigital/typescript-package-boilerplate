const path = require('path');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        // Define the package name
        library: 'pixiumPackage',
        libraryTarget: 'umd',
        globalObject: 'this',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};