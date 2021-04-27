import React, { useEffect } from 'react'

function HistorySample ({ history }) {
  const goBack = () => {
    history.goBack()
  }

  const goHome = () => {
    history.push('/') // 특정경로로 이동
  }

  const replaceToHome = () => {
    history.replace('/') // 방문 기록을 남기지 않음
  }
  useEffect(() => {
    console.log(history)
    const unblock = history.block('정말 떠나실건가요?') // 사용자 페이지 이탈 방지
    return () => { // 컴포넌트가 언마운트 될 때
      unblock()
    }
  }, [history])
  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
      <button onClick={replaceToHome}>홈으로 (Replace)</button>
    </div>
  )
}

export default HistorySample
