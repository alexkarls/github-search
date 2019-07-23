import React from 'react'
import { Link } from 'react-router-dom'
import { PageHeader, Menu, Icon } from 'antd'

const Navbar = () => {
  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <PageHeader style={{ fontSize: '1.4rem' }}>
        <Icon type="github" style={{ padding: '5px' }} />
        <nobr>GitHub Search</nobr>
      </PageHeader>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">
            <Icon type="home" />
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">
            <Icon type="question-circle" />
            About
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Navbar
