import './App.css'
import MyComponent from './MyComponent'

function App() {
  const name = 'react'

  return (
    <div>
      <div className="react">{name}</div>
      <MyComponent />
    </div>
  )
}
export default App
