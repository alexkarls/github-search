import React from 'react'
import { Button, Typography } from 'antd'

const { Title, Paragraph } = Typography

const About = () => {
  return (
    <section style={{ margin: 50, textAlign: 'center' }}>
      <Title level={2}>GitHub Search</Title>
      <Paragraph>
        Experimental application created to experiment with the GitHub API...
      </Paragraph>
      <Paragraph>Version 1.0.0</Paragraph>
      <Paragraph>Alex Karlsson</Paragraph>
      <div style={{ margin: 25 }}>
        <Button
          href="https://github.com/alexkarls"
          icon="github"
          type="primary"
          target="_blank"
          style={{
            display: 'block',
            width: 150,
            margin: '10px auto',
            fontSize: '1.2rem'
          }}
        />
        <a href="mailto:alex.karlsson.dev@gmail.com">Contact via E-mail</a>
      </div>
    </section>
  )
}

export default About
