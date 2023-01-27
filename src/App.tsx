import { useState } from 'react'
import { Routes, Route, BrowserRouter as Router, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useSearchProductsQuery, useGetProductDetailsQuery, useGetReviewsQuery } from './redux/cartSlice'
import ProductPage from './components/ProductPage'
import HomePage from './components/HomePage'
import Nav from './components/Nav'


function App() {
  const [count, setCount] = useState(0)
  const params = useParams()
  const { data } = useSearchProductsQuery()
  
  const [products, setProducts] = useState([])
  const dispatch = useDispatch()
  
  console.log(data)
  
  const options = {
    method: 'GET',
    url: 'https://walmart.p.rapidapi.com/products/v2/list',
    params: {cat_id: '0', sort: 'best_seller', page: '1'},
    headers: {
      'X-RapidAPI-Key': '81c7ff456emsh15dd1877c019034p1c55acjsn3e24de972fd9',
      'X-RapidAPI-Host': 'walmart.p.rapidapi.com'
    }
  };

// dummy json fetch effect -- comment out to disable
  useEffect(() => {

    axios.request(options).then(function (response) {
      const items = response.data.data.search.searchResult.itemStacks[0].items
  setProducts(items.filter((item) => item.priceInfo.currentPrice !== null))
  //console.log(items);
}).catch(function (error) {
  console.error(error);
});

    
    
    /*
        axios.get('https://dummyjson.com/products')
    .then((res) => {
    //console.log(res.data.products)
      setProducts(res.data.products)
    })
      .catch((err) => {
        console.log(err)
      })
    */


  }, []);

  return (
    <div className='bg-blue-100'>
        <Router>
        <Nav/>

        <Routes>
          <Route path='/' element={<HomePage products={products} />} />
          <Route
            path='/products/:id'
            element={
              <ProductPage params={params} products={products}
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
