import React from 'react'
import { Route, Link } from 'react-router-dom'
import About from './About'
import HistorySample from './HistorySample'
import Home from './Home'
import Profiles from './Profiles'

function App () {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link> {/* 페이지가 새로 로드되지 않고 해당 주소에 맞는 컴포넌트만 불러올 수 있음 */}
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">예제</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact /> {/* exact 는 경로가 path와 완전히 일치할 때만 해당 컴포넌트를 보여준다는 의미 */}
      <Route path="/about" component={About} />
      <Route path="/profiles" component={Profiles} />
      <Route path="/history" component={HistorySample} />
    </div>
  )
}

export default App
