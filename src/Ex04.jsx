import React, { useState } from 'react'

const Ex04 = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  })
  // 편의를 위해 비구조할당으로 펼치기
  const { username, message } = form
  const onChange = (e) => {
    const copyForm = {
      ...form, // 기존 내용 전체 붙여넣기
      [e.target.name]: e.target.value, // 변경된 값 덮어쓰기
    }
    setForm(copyForm) // form 업데이트 (덮어쓰기)
  }
  /*
  [e.target.name]: e.target.value
  [e.target.name] → 객체 안에서 key를 []로 감싸면, 
                    그 안에 넣은 레퍼런스가 가리키는 실제 값이 key값으로 사용됨
  */

  const onClick = () => {
    alert(username + ': ' + message)
    setForm({
      username: '',
      message: '',
    })
  }
  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      onClick()
    }
  }

  return (
    <div>
      <h1>이벤트 실습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
        onKeyDown={onKeyDown}
      ></input>

      <input
        type="text"
        name="message"
        placeholder="입력하세요..."
        value={message}
        onChange={onChange}
        onKeyDown={onKeyDown}
      ></input>
      <button onClick={onClick}> 확인 </button>
    </div>
  )
}

export default Ex04
