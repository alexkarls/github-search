import React, { useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { Typography } from 'antd'
import RepoCard from './RepoCard'
import GithubContext from '../../context/github/githubContext'

const { Title } = Typography

const Repos = ({ match }) => {
  const githubContext = useContext(GithubContext)
  const { repos, getUserRepos } = githubContext

  useEffect(() => {
    getUserRepos(match.params.login)
    //eslint-disable-next-line
  }, [])

  if (repos.message === 'Not Found') {
    return null
  }

  return (
    <>
      <Title level={3} style={{ textAlign: 'center' }}>
        Latest 5 Repositories
      </Title>
      {repos.map(repo => (
        <RepoCard repo={repo} key={repo.id} />
      ))}
    </>
  )
}

Repos.propTypes = {
  match: PropTypes.object.isRequired
}

export default Repos
