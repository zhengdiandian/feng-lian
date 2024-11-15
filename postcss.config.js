module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    'postcss-aspect-ratio-mini': {},
    'postcss-write-svg': {
      utf8: false
    },
    'postcss-cssnext': {},
    'postcss-px-to-viewport': {
      viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
      viewportHeight: 812, // 视窗的高度，根据750设备的宽度来置顶，一般指定1334，也可以不配置
      unitPrecision: 3, // 指定'px'转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['.ignore', '.hairlines', '.g-vw-no'], // 指定不转行为视窗单位的类，可以自定义，可以无限添加，建议定义一至两个通用的类名
      minPixeValue: 2, // 小于或等于'1px'不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false // 允许在媒体查询中转换'px'
    },
    'postcss-viewport-units': {},
    'cssnano': {
      preset: 'advanced',
      autoprefixer: false,
      'postcss-zindex': false
    }
  }
}
