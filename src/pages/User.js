import React from 'react'
import UserPage from '../components/users/UserPage'
import Repos from '../components/repos/Repos'

const contentStyle = {
  width: '90%',
  maxWidth: '1200px',
  margin: '20px auto'
}

const User = ({ match }) => {
  return (
    <>
      <section style={contentStyle}>
        <UserPage match={match} />
      </section>
      <section style={contentStyle}>
        <Repos match={match} />
      </section>
    </>
  )
}

export default User
