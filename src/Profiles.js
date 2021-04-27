import React from 'react'
import Profile from './Profile'
import { NavLink, Route } from 'react-router-dom'
import WithRouterSample from './WithRouterSample'
import RouterHookSample from './RouterHookSample'

function Profiles () {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/suyeon"
            activeStyle={{ background: 'black', color: 'white' }}
            activeClassName="active"
            // isActive={({ match, location }) => } // true를 반환하면 스타일이 들어가고 아니면 안들어감
          >
            suyeon
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/woogie"
            activeStyle={{ background: 'black', color: 'white' }}
          >
            woogie
          </NavLink>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해주세요</div>}
      /> {/* render를 사용하면 바로 함수형 컴포넌트를 넣어줄 수 있음 */}
      <Route path="/profiles/:username" component={Profile} />
      <WithRouterSample />
      <RouterHookSample />
    </div>
  )
}

export default Profiles
