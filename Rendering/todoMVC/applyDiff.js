// 노드 변경 여부 함수
/* 1. 속성 수가 다르다
 *  2. 하나 이상으 속성이 변경되었다.
 *  3. 노드에 자식이 없으며 textContent가 다르다
 */
const isNodeChanged = (node1, node2) => {
  const n1Attributes = node1.attributes;
  const n2Attributes = node2.attributes;
  //속성 수가 다르다
  if (n1Attributes.length !== n2Attributes.length) {
    return true;
  }
  //하나 이상의 속성이 변경되었다.
  const differentAttribute = Array.from(n1Attributes).find((attribute) => {
    const { name } = attribute;
    const attribute1 = node1.getAttribute(name);
    const attribute2 = node2.getAttribute(name);

    return attribute1 !== attribute2;
  });

  if (differentAttribute) {
    return true;
  }
  //노드에 자식이 없으며 , 내용이 다르다
  if (
    node1.children.length === 0 &&
    node2.children.length === 0 &&
    node1.textContent !== node2.textContent
  ) {
    return true;
  }

  return false;
};

const applyDiff = (parentNode, realNode, virtualNode) => {
  //새 노드가 정의 되지 않은경우 실제 노드를 삭제
  if (realNode && !virtualNode) {
    realNode.remove();
  }

  //실제 노드가 정의되지 않았지만 가상 노드가 존재하는 경우 부모 노드에 추가
  if (!realNode && virtualNode) {
    parentNode.appendChild(virtualNode);
    return;
  }

  //두 노드간 차이가 있는지 확인
  if (isNodeChanged(virtualNode, realNode)) {
    realNode.replaceWith(virtualNode);
  }

  //하위 노드에 대한 diff 알고리즘 적용
  const realChildren = Array.from(realNode.children);
  const virtualNode = Array.from(virtualNode.children);

  const max = Math.max(realChildren.length, virtualChildren.length);

  for (let i = 0; i < max; i++) {
    applyDiff(realNode, realChildren[i], virtualChildren[i]);
  }
};
export default applyDiff;
