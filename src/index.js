import './css/style.css'
import icon1 from "./images/icon1.jpg"
import printMe from "./js/print.js"
import { chunk } from "lodash-es"
//  由于 treeshaking 这里只导入 chunk，则只打包该方法
console.log(chunk)

function component() {
    
    const element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = "你好 webpack";
    element.className = "hello"

    var myImg = new Image()
    myImg.src = icon1
    element.appendChild(myImg)

    btn.innerHTML = "点我查看 lazyload 效果"
    btn.onclick = printMe
    element.appendChild(btn)

    return element;
}

document.body.appendChild(component());