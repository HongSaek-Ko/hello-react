import React, { useState } from 'react'

const Ex08 = () => {
  const [state, setState] = useState(0)

  const sumHandler = () => {
    setState(state + 1) // 함수 내에서 변수 선언 안 해놓으면,
    setState(state + 2) // 초기값을 가져옴 (처음엔 0,
    setState(state + 3) // 이후부턴 함수 실행 이후.)
    setState(state + 4) // 때문에, 함수 내에서는 직전 상태값 유지 (-)
  }

  const sumHandler2 = () => {
    setState((prev) => prev + 1) // 함수 내에서 변수 선언 시,
    setState((prev) => prev + 2) // 직전 변수값을 가져오기 때문에,
    setState((prev) => prev + 3) // 누적해서 값 대입(추가)가 가능
    setState((prev) => prev + 4) // 즉, 함수 내 직전 상태값 유지 (+)
    
  }
  return (
    <div>
      <div>결과: {state}</div>
      <button type="button" onClick={sumHandler}>
        그런 거 안씀
      </button>{' '}
      <br />
      <button type="button" onClick={sumHandler2}>
        prev 씀
      </button>
    </div>
  )
}

export default Ex08
