import React from 'react'

export default (props) => {
  const { top, left, zindex, words } = props
  return (
    <li
      style={{
        width: '100px',
        height: '100px',
        position: 'absolute',
        top: `${top}px`,
        left: `${left}px`,
        zIndex: zindex,
      }}
    >
      <a href="javascript:;">
        <p style={{ fontSize: words?.length < 50 ? '17px' : '13px' }}>
          {words}
        </p>
      </a>
    </li>
  )
}
