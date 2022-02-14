/* @jsx createElement */
// /* @jsx React.createElement */
// 이 주석은 지시어 이며, jsx구문을 어떤 메서드로 변환시킬가를 정한다.
import {createElement, render} from './react.js'
// 리엑트는 기본적으로 가상돔
// 가상돔을 만든다고 하면 어떻게 만들 수 있을까?
// 가상돔은 기본적으로 html태그를 변환시키는 구조
    // html은 기본적으로 태그와 속성과 value가 있고 태그 사이에는 자식 노드가 올 수 있다.


function Title() {
    return(
        <div>
            <h2>jongyeol</h2>
        </div>
    )
}


console.log("Title()", Title())

render(<Title/>, document.querySelector('#root'))



