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
import ProtectedRoute from '../pages/ProtectedRoute/ProtectedRoute';
import UserProfile from '../pages/UserPerfil/UserProfile';
import ChangePass from '../pages/ChangePass/ChangePass';
import VerifyAccount from '../pages/VerifyAccount/VerifyAccount';
import MyOrders from '../pages/MyOrders/MyOrders';
import Felicitaciones from '../pages/Felicitaciones/Felicitaciones';
import Resumen from '../pages/Resumen/Resumen';


const Routes = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
        <ReactDomRoutes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='login' element={<Login />} />
                <Route path='login/register' element={<Register />} />
                <Route path='perfil' element={<ProtectedRoute redirectTo='/login'>
                            <UserProfile/>
                        </ProtectedRoute>} />
                <Route path='mis-ordenes' element={<ProtectedRoute redirectTo='/misordenes'>
                            <MyOrders/>
                        </ProtectedRoute>} />
                <Route path='products' element={<Cars />} />
                <Route path='info' element={<Info />} />
                <Route path='/felicitaciones' element={<Felicitaciones />} />
                <Route path='*' element={<PageNotFound />} />
                <Route path='product/:id' element={<ProductDetails />} />
                <Route path='changepass' element={<ChangePass/>} />
                <Route path='/resumen/:orderId' element={<Resumen/>} />

                <Route path='verifyaccount' element={<ProtectedRoute redirectTo='/login'>
                            <VerifyAccount/>
                        </ProtectedRoute>} />
                <Route
                    path='checkout'
                    element={
                        <ProtectedRoute redirectTo='/login'>
                            <Checkout />
                        </ProtectedRoute>
                    }
                />
        </ReactDomRoutes>
        </AnimatePresence>
    )
}




export default Routes