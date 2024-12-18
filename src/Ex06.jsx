import React, { useState } from 'react';

const Ex06 = () => {
  const [fruitName, setFruitName] = useState('');
  const onChangeName = (e) => setFruitName(e.target.value);
  const onClick = (e) => {
    alert('추가 완료!'); // id는 배열 길이+1로 설정  name은 입력(저장)했던 값
    setFruits([...fruits, { id: ++fruits.length, name: fruitName }]); // 배열 객체를 가져오고, 배열에 새 객체({id: name}) 추가
    // const addFruits = fruits.concat({ id: ++fruits.length, name: fruitName}) // 기존 배열과 새로운 데이터를 연결 - 새로운 배열로 리턴
    // 지양: fruits.push... <<< 불변성의 원칙에 위배됨 (push 사용 시 기존 배열 수정됨)
    setFruitName(''); // 이벤트 완료 시점 - 입력한 결과값(전체 문자열) 빈 문자열로 초기화
  };

  // 클릭 이벤트를 엔터 시에도 발생
  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  // 문 2. 아래 과일 목록을 화면에 출력하라.
  const [fruits, setFruits] = useState([
    { id: 1, name: '사과' },
    { id: 2, name: '딸기' },
    { id: 3, name: '수박' },
    { id: 4, name: '복숭아' },
  ]); // 'fruit'은 단순 파라미터. const fruits 변수와 동일
  const fruitList = fruits.map((fruit) => (
    <li key={fruit.id}>
      {' '}
      {/* 고유 key값 부여*/}
      {fruit.id}: {fruit.name} {/* 목록(li) 구조 설정 (id: name) */}
    </li>
  ));
  // 문 3. 과일 이름을 입력받아 state에 추가하여, 새로 추가된 목록까지 화면에 출력하라.
  return (
    <div>
      <h1>과일 목록</h1>
      <ul>{fruitList}</ul>
      <input
        type="text"
        placeholder="과일명..."
        value={fruitName} // 입력한 결과값(전체 문자열)을 인식할 value 설정 = const fruitName
        onChange={onChangeName} // 변경되는 값을 인식하는 이벤트 = const onChangeName
        onKeyDown={onKeyDown} // 변경되는 값을 인식하는 이벤트 = const onChangeName
      ></input>
      <button onClick={onClick}> 추가 </button>
    </div>
  );
};

export default Ex06;
