module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "~@/uni.scss";`
            }
        }
    },
    transpileDependencies: ['@dcloudio/uni-ui']
}
