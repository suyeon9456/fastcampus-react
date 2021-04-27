import React from 'react'
import Profile from './Profile'
import { Link, Route } from 'react-router-dom'

function Profiles () {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <Link to="/profiles/suyeon">suyeon</Link>
        </li>
        <li>
          <Link to="/profiles/woogie">woogie</Link>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해주세요</div>}
      /> {/* render를 사용하면 바로 함수형 컴포넌트를 넣어줄 수 있음 */}
      <Route path="/profiles/:username" component={Profile} />
    </div>
  )
}

export default Profiles