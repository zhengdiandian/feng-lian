
module.exports = function (api) {
  api.cache(true)

  // const presets = [ ... ];
  // const plugins = [ ... ];

  return {
    // "presets": [
    //   ["env", {
    //     "modules": true,
    //     "targets": {
    //       "browsers": ["> 1%", "last 2 versions", "not ie <= 5", "ios_saf <= 1"]
    //     }
    //   }],
    //   "stage-0"
    // ],
    presets: [
      ["@vue/app", 
        { useBuiltIns: "entry" }
      ]
    ],
    "plugins": [
      // eslint-disable-next-line no-sparse-arrays
      ["import", "component",  {
        "libraryName": "muse-ui",
        "libraryDirectory": "lib",
        "camel2DashComponentName": false,
        // eslint-disable-next-line no-dupe-keys
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }, "transform-vue-jsx", "transform-runtime", "transform-es2015-classes",]
    ]
  }
}
