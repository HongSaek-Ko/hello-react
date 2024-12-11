import React, { useState } from 'react'

const Ex02 = () => {
  const [word, setWord] = useState('')
  const [lastWord, setLastWord] = useState('')
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="message"
        placeholder="이벤트 연습"
        value={word} // 입력한 값만 state에 등록되게 함 ('연결')
        onChange={(e) => {
          console.log('방금 입력한 글자: ' + e.nativeEvent.data)
          console.log('지금까지 입력한 글자: ' + e.target.value)
          setWord(e.target.value)
          setLastWord(e.nativeEvent.data)
        }}
      />
      <button
        onClick={() => {
          alert(word)
          setWord('')
        }}
      >
        {' '}
        확인{' '}
      </button>
      <h3>방금 입력한 글자: {lastWord}</h3>
      <h3>지금까지 입력한 글자: {word}</h3>
    </div>
  )
}

export default Ex02
