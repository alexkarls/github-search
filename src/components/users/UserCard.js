import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'antd'

const UserCard = ({ user: { login, avatar_url } }) => {
  return (
    <>
      <Card
        title={login}
        cover={<img alt="GitHub avatar" src={avatar_url} />}
        style={{ textAlign: 'center' }}
      >
        <Card.Grid style={{ width: '100%' }}>
          <Button>
            <Link to={`/user/${login}`}>More</Link>
          </Button>
        </Card.Grid>
      </Card>
    </>
  )
}

export default UserCard
