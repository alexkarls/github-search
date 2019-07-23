import React from 'react'
import { Spin } from 'antd'

const Spinner = () => {
  return (
    <>
      <Spin
        style={{ display: 'block', width: '200px', margin: '100px auto' }}
      />
    </>
  )
}

export default Spinner
