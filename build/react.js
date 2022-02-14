function renderRealDom(vdom) {
  if (typeof vdom === 'string') {
    return document.createTextNode(vdom);
  }

  if (vdom === undefined) return;
  const $el = document.createElement(vdom.tagName);
  vdom.children.map(renderRealDom).forEach(node => {
    $el.appendChild(node);
  });
  return $el;
}

export function render(vdom, container) {
  console.log('vdom', vdom);
  container.appendChild(renderRealDom(vdom));
} // jsx를 쓰지 않고 리액트 컴포넌트를 만들 수 있다.
// 바벨이 jsx -> createElement 형태로 바꿔준다.
// children 은 여러개가 올 수 있다. => 가변인자로 받음
// tagName이 함수이면 가변인자를 넘겨주기 위해서 apply사용

export function createElement(tagName, props, ...children) {
  if (typeof tagName === 'function') {
    return tagName.apply(null, [props, ...children]);
  }

  return {
    tagName,
    props,
    children
  };
}