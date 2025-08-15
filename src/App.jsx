import { useState } from 'react'
import './App.css'
import ProductList from './ProductList.jsx'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <div className='ui unstackable items'>
      <ProductList />
  </div>
  )
}

export default App
