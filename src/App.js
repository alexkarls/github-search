import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import Home from './pages/Home'
import About from './pages/About'
import User from './pages/User'
import NotFound from './pages/NotFound'
import Navbar from './components/layout/Navbar'
import GithubState from './context/github/GithubState'

const { Header, Content } = Layout

function App() {
  return (
    <>
      <GithubState>
        <Router>
          <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ height: 'min-content' }}>
              <Navbar />
            </Header>
            <Content style={{ height: 'min-content' }}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </Content>
          </Layout>
        </Router>
      </GithubState>
    </>
  )
}

export default App
