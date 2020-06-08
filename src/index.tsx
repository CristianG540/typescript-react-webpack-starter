import React from 'react'
import ReactDOM from 'react-dom'
import { Hello } from './components/Hello'

if (process.env.NODE_ENV !== 'production') {
  console.log(
    'Looks like we are in development mode! 🐝🐝🐝:',
    process.env.NODE_ENV
  )
}

ReactDOM.render(
  <Hello compiler='TypeScript' framework='React' />,
  document.getElementById('example')
)
