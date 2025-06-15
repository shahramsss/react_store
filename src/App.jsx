import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Shop } from './pages/shop/shop'
import { Cart } from './pages/cart/cart'
import { Mynav } from './components/Mynav'
import { ShopContextProvider } from './context/shopContext'

function App() {

  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Mynav />

          <Routes >
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>

        </Router>
      </ShopContextProvider>

    </div>
  )
}

export default App
