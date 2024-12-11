import React, { useState } from 'react'

const Ex06 = () => {
  const [fruitName, setFruitName] = useState('')
  const onChangeName = (e) => setFruitName(e.target.value)

  const onClick = () => {
    alert('추가 완료!')
    setFruits([...fruits, { id: fruits.length + 1, name: fruitName }])
    setFruitName('')
  }
  // 문 2. 아래 과일 목록을 화면에 출력하라.
  const [fruits, setFruits] = useState([
    { id: 1, name: '사과' },
    { id: 2, name: '딸기' },
    { id: 3, name: '수박' },
    { id: 4, name: '복숭아' },
  ])
  const fruitList = fruits.map((fruit, index) => (
    <li key={index}>
      {fruit.id}: {fruit.name}
    </li>
  ))
  // 문 3. 과일 이름을 입력받아 state에 추가하여, 새로 추가된 목록까지 화면에 출력하라.
  return (
    <div>
      <ul>{fruitList}</ul>
      <input
        type="text"
        name="fruitName"
        placeholder="과일명..."
        value={fruitName}
        onChange={onChangeName}
      ></input>
      <button onClick={onClick}> 추가 </button>
    </div>
  )
}

export default Ex06
