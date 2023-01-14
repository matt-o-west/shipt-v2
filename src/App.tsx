import { useState } from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import ProductPage from './components/ProductPage'
import HomePage from './components/HomePage'
import Nav from './components/Nav'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-blue-100'>
        <Router>
        <Nav />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route
            path='/products/:id'
            element={
              <ProductPage 
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
