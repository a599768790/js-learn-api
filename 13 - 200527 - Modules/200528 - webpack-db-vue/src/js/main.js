const { add, mul } = require("./mathUtils.js");

console.log(add(20, 30));
console.log(mul(20, 30));

import { GetText } from "../js/info";

let date = ["hello", "world", "this", "is", "es6", "code"];
GetText(date);

// import { name, age, height } from "./info.js";
// console.log(name);
// console.log(age);
// console.log(height);

require("../css/normal.css");
require("../css/special.scss");
console.log(App)
import Vue from 'vue'
import App from '../vue/App.vue'
new Vue({
    el: '#app',
    render:h=>h(App)
    // template: '<App/>',
    // components: {
    //     App
    // }

})