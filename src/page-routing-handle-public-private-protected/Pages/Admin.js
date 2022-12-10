import React from 'react'

export default function Admin({ type }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'black',
        color: 'white',
      }}
    >
      <div
        style={{
          width: '100%',
          color: 'white',
          position: 'relative',
          top: '45vh',
          textAlign: 'center',
        }}
      >
        {type ? type : 'Admin'} (Protected: authenticated user with role '
        {type ? type : 'Admin'}' - required)
      </div>
    </div>
  )
}
