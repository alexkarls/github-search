import React from 'react'
import Search from '../components/users/Search'
import Users from '../components/users/Users'

const contentStyle = {
  width: '90%',
  maxWidth: '1200px',
  margin: '20px auto'
}

const Home = () => {
  return (
    <>
      <section style={contentStyle}>
        <Search />
      </section>
      <section style={contentStyle}>
        <Users />
      </section>
    </>
  )
}

export default Home
