// import
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

//export
module.exports = {
  // parcel index.html
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: "./js/main.js",

  // 결과물(번들)을 변환하는 설정
  output: {
    // path: path.resolve(__dirname, "dist"), // 절대 경로 명시, //현재파일 __dirname과 dist를 합침
    // filename: "main.js",
    clean: true,
  },

  //순서 중요
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          "style-loader", // css-loader로 해석된 내용을 index.html에서 사용할 수 있도록 해주는 패키지
          "css-loader", // 자바스크립트 파일에서 css 파일을 해석하기 위해서 설정
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },

  // 필요한 plugin들 설정
  // dist폴더 안에 index.html 연결
  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
  ],

  // localhost 명시
  devServer: {
    host: "localhost",
  },
};
