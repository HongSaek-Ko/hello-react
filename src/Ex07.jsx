import React from 'react';
import { useState } from 'react';

const Ex07 = () => {
  const [fruits, setFruits] = useState([
    { id: 1, name: '사과' },
    { id: 2, name: '딸기' },
    { id: 3, name: '수박' },
    { id: 4, name: '복숭아' },
  ]);

  const [inputTxt, setInputTxt] = useState('');
  const [nextId, setNextId] = useState(5);

  const removeHandler = (id) => {
    // id값이 일치하는 객체를 제외한 리스트를 새로 받아오기
    const filterFruits = fruits.filter((fruit) => fruit.id !== id);
    // 배열 'fruits' 수정
    setFruits(filterFruits); // state 변경 - component re-rendering
  };

  const fruitList = fruits.map((fruit) => (
    <li key={fruit.id} onDoubleClick={() => removeHandler(fruit.id)}>
      {fruit.id}: {fruit.name}
    </li>
  ));

  // 클릭 이벤트를 엔터 시에도 발생
  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      clickAddHandler();
    }
  };

  const changeInputHandler = (e) => setInputTxt(e.target.value);
  const clickAddHandler = () => {
    const copyFruits = fruits.concat({ id: nextId, name: inputTxt });
    setFruits(copyFruits);
    setNextId((prev) => prev + 1); // 기존(직전)값에 1 추가.
    setInputTxt('');
  };

  return (
    <div>
      <h1>과일 목록</h1>
      <ul>{fruitList}</ul>
      <input
        type="text"
        placeholder="과일명..."
        value={inputTxt} // 입력한 결과값(전체 문자열)을 인식할 value 설정 = const fruitName
        onChange={changeInputHandler} // 변경되는 값을 인식하는 이벤트 = const onChangeName
        onKeyDown={onKeyDown} // 변경되는 값을 인식하는 이벤트 = const onChangeName
      ></input>
      <button onClick={clickAddHandler}> 추가 </button>
    </div>
  );
};

export default Ex07;
