import React, { useState } from 'react'
import './App.css'
import { Input } from 'antd'
import Card from './Card'

/**
 * list 数据结构  =  top left zindex words color
 */

function App() {
  const [list, setList] = useState([])
  const [value, setValue] = useState('')
  const onPressEnter = (e) => {
    if (e.target.value && e.target.value !== '') {
      const newItem = {
        top: Math.floor(Math.random() * (window.innerHeight - 500)),
        left: Math.floor(Math.random() * (window.innerWidth - 500)),
        zindex: list.length + 1,
        words: e.target.value,
      }
      setList([...list, newItem])
      setValue('')
    } else {
    }
  }
  return (
    <div className="App">
      <ul>
        {list.map((value, index) => (
          <Card key={index} {...value} />
        ))}
      </ul>

      {/* input 输入框 */}
      <div className="app-input">
        <Input
          className="antd-input"
          value={value}
          onChange={(value) => {
            setValue(value.target.value)
          }}
          maxLength={100}
          showCount
          allowClear
          onPressEnter={onPressEnter}
        />
      </div>
    </div>
  )
}

export default App
