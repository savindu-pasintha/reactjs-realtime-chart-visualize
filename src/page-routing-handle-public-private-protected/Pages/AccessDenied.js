import React from 'react'

export default function AccessDenied() {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'black',
        color: 'white',
      }}
    >
      <h1
        style={{
          width: '100%',
          color: 'white',
          position: 'relative',
          top: '45vh',
          textAlign: 'center',
        }}
      >
        {' '}
        Page Access Denied !
      </h1>
    </div>
  )
}
