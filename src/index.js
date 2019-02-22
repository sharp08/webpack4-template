import './css/style.css'
import icon1 from "./images/icon1.jpg"
import printMe from "./js/print.js"
// import { chunk } from "lodash-es"
//  由于 treeshaking 这里只导入 chunk，则 production 模式下只打包该方法

function init() {
    //  展示环境变量
    const env_ele = document.querySelector(".node_env");
    env_ele.innerHTML = process.env.NODE_ENV;
    env_ele.className = "env"

    //  展示图片
    const img_ele = document.querySelector("img");
    img_ele.src = icon1

    //  展示背景图
    const img_bg = document.querySelector(".img_bg span");
    img_bg.className = "bg"

    //  
    const lazy_load = document.querySelector("button");
    lazy_load.onclick = printMe
}

init()