import {Routes,Route,Navigate} from 'react-router-dom'
import Home from '../Page/Home'
import Shop from '../Page/Shop'
import Cart from '../Page/Cart'
import ProductDetails from '../Page/ProductDetails'
import Checkout from '../Page/Checkout'
import Login from '../Page/Login'
import Signup from '../Page/Signup'


const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Navigate to="home"/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='shop' element={<Shop/>}/>
            <Route path='shop/:id' element={<ProductDetails/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='checkout' element={<Checkout/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<Signup/>}/>
        </Routes>
    </div>
  )
}

export default Routers

