# 컴포넌트 기반의 사용자 인터페이스
컴포넌트는 트리구조로 구성된다.  
컴포넌트에 있어서 부모와 자식 관계만 중요하다.

### 리엑트 요소 (elements) 생성하기
 - 요소란 화면에서 보고자 하는 것들에 대해 리엑트에게 설명해 주는 서술자
 - 리액트 요소는 dom 요소에 대한 가상의 표현
 

### 리엑트 요소는 이렇게 생겼을꺼야
- 가상돔은 기본적으로 html태그를 변환시킨 구조
- html은 기본적으로 태그와 속성과 value가 있고 태그 사이에는 자식 노드가 올 수 있다.
```html
<div id="root" class="container">
    <span>jongyeol</span>
 </div>
```
```js
 {
     tagName: 'div',
         props: {
            id: "root",
         className: "container",
     },
     children: [
         {
             tagName: 'span',
             props: {},
             children: [
                 'jongyeol',
             ]
         }
     ]
}
```

### 리액트 요소는 React.createElement 메서드를 이용해서 생성
React.createElement 함수는 문자열이나, 컴포넌트, props 자식 컴포넌트를 인수로 전달받아 리액트 요소를 리턴한다.
```js
function Title() {
    return(
        <div>
            <span>jongyeol</span>
        </div>
    )
}
```

createElement 인자 구조는 첫번째 태그이름, 두번째 속성, 세번째 자식
똑같은 태그형태이지만 어쩔때는 문자열로 넘겨주고 어쩔때는 함수 그 자체로 넘겨준다.
 - 사용자가 만든 리액트 컴포넌튼는 반드시 대문자로 해야 하는 이유! (리엑트 컨벤션)
```js
function Title() {
    return createElement("div", null, createElement("span", null, "jongyeol"));
}
```

### 리액트의 상태
상태의 종류는 변경 가능한 상태와 변경 불가능한 상태가 있다.  
props, state  
setState를 통해서만 상태를 변경 가능  
불션성을 이용해서 가상돔과 비교 

