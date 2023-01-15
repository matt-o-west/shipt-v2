import { useState } from 'react'
import { Routes, Route, BrowserRouter as Router, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProductPage from './components/ProductPage'
import HomePage from './components/HomePage'
import Nav from './components/Nav'


function App() {
  const [count, setCount] = useState(0)
  const params = useParams()
  const cartTotal = useSelector((state) => state.cart.length)

  return (
    <div className='bg-blue-100'>
        <Router>
        <Nav cartTotal={cartTotal} />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route
            path='/products/:id'
            element={
              <ProductPage params={params}
              />
            }
          />

          <Route path='*' element={<h1>404: Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
