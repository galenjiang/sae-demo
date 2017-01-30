/**
 * Created by Galen on 2017/1/28.
 */
module.exports = (ctx) => ({
  // parser: ctx.parser ? 'sugarss' : false,
  // map: ctx.env === 'development' ? ctx.map : false,
  plugins: {
    // 'postcss-import': {},
    'postcss-nested': {},
    // cssnano: ctx.env === 'production' ? {} : false
  }
})