import React from 'react'
import { Typography } from 'antd'

const { Title, Paragraph } = Typography

const NotFound = () => {
  return (
    <section style={{ margin: 50, textAlign: 'center' }}>
      <Title level={2}>Not Found</Title>
      <Paragraph>The resource was not found on our server...</Paragraph>
    </section>
  )
}

export default NotFound
