import React, { useState } from 'react'

const Say = () => {
  // state 변수 선언
  const [message, setMessage] = useState('')
  const [color, setColor] = useState('black')

  const [test, setTest] = useState({ a: 10, b: 20 })

  // button event handler
  const onClickEnter = () => {
    setMessage('들락')
  }
  const onClickLeave = () => {
    setMessage('날락')
  }
  const onClickTest = () => {
    setTest({ ...test, a: 200 })
    // 객체 형태 유지 + 일부만 바꾸고자 하면 spread로 객체(전체)를 가져와야 함
    // 가령, 다음 경우를 지양해야 함: {a: 200}. 이렇게 되면 b가 사라짐 (의도대로 안된 거니까 지양)
  }

  return (
    <div>
      <button onClick={onClickEnter}> 입장 </button>
      <button onClick={onClickLeave}> 퇴장 </button>
      <h1 style={{ color, backgroundColor: 'yellow' }}>{message}</h1>{' '}
      {/* style 값도 {객체 형태}로 작성 */}
      <button onClick={() => setColor('red')}>Red</button>
      <button onClick={() => setColor('blue')}>Blue</button>
      <button onClick={onClickTest}>값 변경</button>
    </div>
  )
}

export default Say
