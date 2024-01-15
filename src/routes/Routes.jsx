import { Routes as ReactDomRoutes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Checkout from '../pages/Checkout/Checkout';
import Cars from '../pages/Products/Products';
import { AnimatePresence } from 'framer-motion';
import ProductDetails from '../components/ProductDetails/ProductDetails';




const Routes = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
        <ReactDomRoutes location={location} key={location.pathname}>
            <Route path='/' element={<Home/>} />
            <Route path='login'>
                <Route index  element={<Login/>} />
                <Route path='register' element={<Register />} />
            </Route>
            <Route path='login' element={<Login/>}/>
            <Route path='products' element={<Cars/>} />
            <Route path='*' element={<p> ERROR 404</p>}/>
            <Route path="/product/:id" element={<ProductDetails/>} />
            <Route
        path='/checkout'
        element={
            <Checkout />
        
        }
      />
        </ReactDomRoutes>
        </AnimatePresence>
    )
}




export default Routes