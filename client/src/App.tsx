 import { Route, Routes } from 'react-router'
import './App.css'
import Register from './pages/Register'
import Home from './pages/Home'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import Order from './pages/Order'
import Menu from './pages/Menu'
import Profile from './pages/Profile'
import SearchPage from './pages/SearchPage'
import FoodDetails from './components/FoodDetails'
import Cart from './pages/Cart'
import Restaurant from './pages/admin/Restaurant'

function App() {
 

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
        <Route path='/reset-password' element={<ResetPassword/>}></Route>
        <Route path='/order' element={<Order/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/search/:text' element={<SearchPage/>}></Route>
        <Route path='/food/:id' element={<FoodDetails/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        //admin
        <Route path='/add-restaurant' element={<Restaurant/>}></Route>
      </Routes>
    </div>
  )
}

export default App
