import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Shop } from './pages/shop/shop'
import { Cart } from './pages/cart/cart'
import { Mynav } from './components/Mynav'

function App() {

  return (
    <div>
      <Router>
        <Mynav/>

        <Routes >
          <Route path='/' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>

      </Router>

    </div>
  )
}

export default App
