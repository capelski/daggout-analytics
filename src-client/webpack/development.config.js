const { merge } = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = merge(baseConfig, {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        open: true,
        openPage: 'daggout-analytics',
        // proxy: { '/api': 'http://localhost:3000' },
        publicPath: '/daggout-analytics'
    }
});
