import React, { useState } from 'react'

const Ex01 = () => {
  // 문1. '추가' 버튼을 누르면 data state에 100 추가
  // 단, 100이 한 번만 추가되게끔 구현하라.
  const [data, setData] = useState([1, 2, 3])
  const addData = () => {
    if (data.length <= 3) {
      setData([...data, 100])
    } else {
      alert('더 못해요')
    }
  }

  // 문2. 피카츄를 누르면 pocket 상태의 name 값이 pickachu로 변경,
  // 라이츄를 누르면 pocket 상태의 name 값이 raichu로 변경되도록 구현하라.
  const [pocket, setPocket] = useState({ name: '', age: 100 })
  // 방법 2. 버튼 속성에 따라 변경
  const onClickPoke = (e) => {
    console.log(e.target.innerText)
    if(e.target.innerText === '피카츄') {
      setPocket({ ...pocket, name: '피카츄에용' })
    } else if(e.target.innerText === '라이츄') {
      setPocket({ ...pocket, name: '라이츄에용' })
    }
  }

  // 문3. 위와 동일한 결과가 나오는 다른 방법을 2가지 더 구현하라.

  return (
    <div>
      <h2>{data}</h2>
      <button onClick={addData}>추가</button>
      <h2>
        {' '}
        이름: {pocket.name}, 나이: {pocket.age}
      </h2>
      <button onClick={onClickPoke}>피카츄</button>
      <button onClick={onClickPoke}>라이츄</button>
      {/*   방법 1. 버튼에 이벤트, 함수 추가
      <button onClick={() => setPocket({...pocket, name: '피카츄에용 '})}>피카츄</button>
      <button onClick={() => setPocket({...pocket, name: '라이츄에용 '})}>라이츄</button> */}
    </div>
  )
}

export default Ex01
