import React, { useReducer } from 'react'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'

import {
  SET_USERS,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_LOADING
} from '../types'

const GithubState = props => {
  const initialState = {
    user: {},
    users: [],
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  const setUsers = async text => {
    setLoading()
    const res = await fetch(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    const data = await res.json()
    dispatch({ type: SET_USERS, payload: await data.items })
  }

  const clearUsers = () => dispatch({ type: CLEAR_USERS })

  const getUser = async username => {
    setLoading()
    const res = await fetch(
      `https://api.github.com/users/${username}?client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    dispatch({ type: GET_USER, payload: await res.json() })
  }

  const getUserRepos = async username => {
    setLoading()
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    dispatch({ type: GET_REPOS, payload: await res.json() })
  }

  const setLoading = () => {
    dispatch({ type: SET_LOADING })
  }

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        setUsers,
        clearUsers,
        getUser,
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubState
