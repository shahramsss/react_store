import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <div>
      <Router>
        <div className='container'>
          <button className='btn btn-success'>11111111111</button>
        </div>
        <Routes>
          <Route path='/'/>
          <Route path='/cart'/>
        </Routes>
      </Router>

    </div>
  )
}

export default App
