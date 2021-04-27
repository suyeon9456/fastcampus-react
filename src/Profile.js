import React from 'react'

const profileData = {
  suyeon: {
    name: '조수연',
    description: 'Frontend Engineer'
  },
  woogie: {
    name: '정재욱',
    description: 'Frontend Engineer'
  }
}
function Profile ({ match }) {
  const { username } = match.params
  const profile = profileData[username]

  if (!profile) {
    return <div>존재하지 않은 사용자입니다.</div>
  }
  return (
    <div>
      <h3>{username} ({profile.name})</h3>
      <p>{profile.description}</p>
    </div>
  )
}

export default Profile
