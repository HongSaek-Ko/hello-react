import React, { useState } from 'react'

const Ex03 = () => {
  const [username, setUsername] = useState('')
  const [message, setMessage] = useState('')

  const onChangeUsername = (e) => setUsername(e.target.value)
  const onChangeMessage = (e) => setMessage(e.target.value)
  const onClick = () => {
    alert(username + ': ' + message)
    setUsername('')
    setMessage('')
  }

  return (
    <div>
      <h1>이벤트 실습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChangeUsername}
      ></input>
      <input
        type="text"
        name="message"
        placeholder="입력하세요..."
        value={message}
        onChange={onChangeMessage}
      ></input>
      <button onClick={onClick}> 확인 </button>
    </div>
  )
}

export default Ex03
