module.exports = {
    configureWebpack: config => {
        // console.log(config.css);
    },
   

    css: {
        loaderOptions: {
            scss: {
                prependData: 
                `
                  @import 'scss/abstracts/_variable.scss';
                `
            }
        }
    },

    chainWebpack: config => {
        config.module
          .rule('js')
            .test(/\.m?js$/)
            .exclude
              .add(filepath =>  /(node_modules|bower_components)/.test(filepath))
              .end()
            .use('babel-loader')
              .loader(require.resolve('babel-loader'))
              .end()
              .end()

        // console.log(config.plugins.store)

        // config.plugins.store.delete('html')
        // build 時不注入 preload
        config.plugins.delete('preload-app')
        // build 時不注入 chatbot
        config.plugins.delete('prefetch-app')
    },

    pages: {
        app: {
            entry: 'src/main.js',
            template: 'pubic/index.html',
            filename: 'index.html',
            chunks: ['chunk-vendors','app']
        }
    }
}