import React from 'react'

const Ex05 = () => {
  const fruits = ['사과', '복숭아', '참외', '배'] // 반복되는 요소에 key 추가
  const fruitList = fruits.map((name, index) => <li key={index}>{name}</li>)
  return <ul>{fruitList}</ul>
}

export default Ex05
