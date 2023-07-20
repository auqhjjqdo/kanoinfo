module.exports = {
    publicPath: './',

    configureWebpack: {
        externals: {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'axios': 'axios',
            'dayjs': 'dayjs',
            'vuetify': 'Vuetify',
            'nprogress': 'NProgress'
        }
    },

    productionSourceMap: false,

    chainWebpack: config => {
        config.plugins.delete('prefetch')
    },
    devServer: {
        historyApiFallback: true
    },
    transpileDependencies: true,
    lintOnSave: false
}
