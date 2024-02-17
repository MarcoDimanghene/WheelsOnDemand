import { Routes as ReactDomRoutes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Checkout from '../pages/Checkout/Checkout';
import Cars from '../pages/Products/Products';
import { AnimatePresence } from 'framer-motion';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Info from '../pages/Info/Info';




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
            <Route path='info' element={<Info/>} />
            <Route path='*' element={<PageNotFound/>} />
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