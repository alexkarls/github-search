import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Badge, Button, Card, Icon, Typography, Row, Col } from 'antd'
import Spinner from '../layout/Spinner'
import NotFound from '../../pages/NotFound'
import GithubContext from '../../context/github/githubContext'

/*
Should be broken down into smaller components and then assembled to better
streamline appearance as application grows
*/

const { Title, Paragraph, Text } = Typography

const UserPage = ({ match }) => {
  const githubContext = useContext(GithubContext)
  const { getUser, loading, user } = githubContext

  useEffect(() => {
    getUser(match.params.login)
    // eslint-disable-next-line
  }, [])

  const centerDivContent = {
    textAlign: 'center'
  }

  const {
    avatar_url,
    bio,
    blog,
    company,
    followers,
    following,
    hireable,
    html_url,
    location,
    login,
    name,
    public_repos,
    public_gists
  } = user

  if (loading) {
    return <Spinner />
  }

  // Temporary solution before refactor, don't want components to render pages
  if (user.message === 'Not Found') {
    return <NotFound />
  }

  return (
    <>
      <div style={centerDivContent}>
        <Button
          type="primary"
          shape="round"
          style={{
            display: 'block',
            width: 200,
            margin: '20px auto'
          }}
        >
          <Link to="/">Back to Search</Link>
        </Button>
        <Avatar src={avatar_url} size={225} style={{ margin: '20px' }} />
        {name && (
          <Title level={2} style={{ display: 'block', margin: 0 }}>
            {name}
          </Title>
        )}
        {location && (
          <Title level={3} style={{ display: 'block', margin: 10 }}>
            Location: {location}
          </Title>
        )}
        <Text style={{ display: 'block', margin: 10 }}>
          Hireable: {hireable ? <Icon type="check" /> : <Icon type="stop" />}
        </Text>
        {bio && (
          <>
            <Title level={4} style={{ margin: 20 }}>
              Bio
            </Title>
            <Paragraph style={{ margin: 10 }}>{bio}</Paragraph>
          </>
        )}
        <Button
          href={html_url}
          icon="github"
          target="_blank"
          style={{
            display: 'block',
            width: 200,
            margin: '20px auto'
          }}
        >
          GitHub Link
        </Button>
      </div>
      <Row style={centerDivContent}>
        {login && (
          <Col xs={24} sm={8}>
            <Card title="GitHub Username">{login}</Card>
          </Col>
        )}
        {company && (
          <Col xs={24} sm={8}>
            <Card title="Company">{company}</Card>
          </Col>
        )}
        {blog && (
          <Col xs={24} sm={8}>
            <Card title="Website" href="lol">
              <a alt="user Website" href={`http://${blog}`}>
                {blog}
              </a>
            </Card>
          </Col>
        )}
        <Col span={24}>
          <Card>
            <Badge
              color="red"
              text={'Followers: ' + followers}
              style={{ display: 'block', marginTop: 0 }}
            />
            <Badge
              color="green"
              text={'Following: ' + following}
              style={{ display: 'block', marginTop: 5 }}
            />
            <Badge
              color="blue"
              text={'Public Repos: ' + public_repos}
              style={{ display: 'block', marginTop: 5 }}
            />
            <Badge
              color="yellow"
              text={'Public Gists: ' + public_gists}
              style={{ display: 'block', marginTop: 5 }}
            />
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default UserPage
