import { Routes as ReactDomRoutes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

const Routes = () => {
    return (
        <ReactDomRoutes>
            <Route path='/' element={<Home/>} />
            <Route path='login'>
                <Route index  element={<Login/>} />
                <Route path='register' element={<Register />} />
            </Route>
            <Route path='login' element={<Login/>}/>
            
            <Route path='*' element={<p> ERROR 404</p>}/>
        </ReactDomRoutes>
    )
}

export default Routes