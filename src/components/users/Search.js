import React, { useState, useContext } from 'react'
import { Alert, Button, Input, Row, Col } from 'antd'
import GithubContext from '../../context/github/githubContext'

const Search = () => {
  const githubContext = useContext(GithubContext)
  const [text, setText] = useState('')
  const [alert, setAlert] = useState(false)

  const { users, setUsers, clearUsers } = githubContext

  const handleSearch = (value, event) => {
    event.preventDefault()
    if (text === '') {
      setAlert(true)
      window.setTimeout(() => setAlert(false), 3000)
      return
    }
    setUsers(text)
    setAlert(false)
    setText('')
  }

  const onChange = event => setText(event.target.value)

  return (
    <>
      <Row align="middle" justify="center">
        <Col xs={{ span: 20, offset: 2 }} sm={{ offset: 6, span: 12 }}>
          <Input.Search
            placeholder="Enter username..."
            enterButton
            value={text}
            onChange={onChange}
            onSearch={handleSearch}
          />
        </Col>
        {alert && (
          <Col
            xs={{ span: 20, offset: 2 }}
            sm={{ offset: 6, span: 12 }}
            style={{ marginTop: 10 }}
          >
            <Alert message="Invalid search..." type="error" showIcon />
          </Col>
        )}
        {users.length > 0 && (
          <Col
            xs={{ span: 20, offset: 2 }}
            sm={{ offset: 6, span: 12 }}
            style={{ marginTop: 10 }}
          >
            <Button
              style={{
                display: 'block',
                width: '100%',
                margin: 'auto',
                letterSpacing: '2px'
              }}
              onClick={clearUsers}
            >
              CLEAR SEARCH
            </Button>
          </Col>
        )}
      </Row>
    </>
  )
}

export default Search
