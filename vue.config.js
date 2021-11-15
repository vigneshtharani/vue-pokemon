module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/scss/global.scss";`,
      },
    },
  },
  pluginOptions: {
    i18n: {
      locale: 'tr',
      fallbackLocale: 'tr',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
  devServer: {
    disableHostCheck: true,
  },
};
