const path = require("path");
module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundel.js",
    publicPath: "dist/",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader", // 将 JS 字符串生成为 style 节点
          },
          {
            loader: "css-loader", // 将 CSS 转化成 CommonJS 模块
          },
          {
            loader: "sass-loader", // 将 Sass 编译成 CSS
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/, //排除这些
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015"], //因为安装的是babel-preset-es2015，所以这里要匹配这个
          },
        },
      },
      {
        test: /\.vue$/,
        // exclude: /(node_modules|bower_components)/, //排除这些
        use: {
          loader: "vue-loader"
        },
      },
    ],
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
  },
};
