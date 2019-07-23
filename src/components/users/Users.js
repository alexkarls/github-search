import React, { useContext } from 'react'
import { Row, Col } from 'antd'
import Spinner from '../layout/Spinner'
import UserCard from './UserCard'
import GithubContext from '../../context/github/githubContext'

const Users = () => {
  const githubContext = useContext(GithubContext)
  const { users, loading } = githubContext

  if (loading) {
    return <Spinner />
  } else {
    return (
      <Row gutter={20}>
        {users.map(user => (
          <Col
            key={user.id}
            style={{ marginTop: '20px' }}
            xs={12}
            sm={6}
            lg={4}
          >
            <UserCard user={user} />
          </Col>
        ))}
      </Row>
    )
  }
}

export default Users
