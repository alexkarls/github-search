import React from 'react'
import PropTypes from 'prop-types'
import { Card, Button, Typography } from 'antd'

const { Paragraph } = Typography

const RepoCard = ({ repo }) => {
  return (
    <>
      <Card title={repo.name} style={{ textAlign: 'center', margin: 10 }}>
        <Card.Grid style={{ width: '100%' }}>
          <Paragraph>{repo.description}</Paragraph>
          <Button href={repo.html_url} target="_blank">
            Link
          </Button>
        </Card.Grid>
      </Card>
    </>
  )
}

RepoCard.propTypes = {
  repo: PropTypes.object.isRequired
}

export default RepoCard
