import axios from "axios";
import { createOrderFail, fetchOrdersFail, fetchOrdersStart, fetchOrdersSuccess } from "../redux/orders/orderSlice";
import { BASE_URL } from "../utils";

export const getOrders = async (dispatch, currentUser) => {    
    dispatch(fetchOrdersStart());

    try {
        const orders = await axios.get(`${BASE_URL}orders`, {
            headers: {
                'x-token': currentUser.token,
            },
        });

        
        if (orders.status === 200 && orders.data?.data) {
            dispatch(fetchOrdersSuccess(orders.data.data));
        } else {
            dispatch(fetchOrdersFail("Error al obtener las órdenes"));
        }

    } catch (err) {
        console.error(err);
        dispatch(fetchOrdersFail("Error en el usuario, debe iniciar sesión"));
        return alert(err.response.data.errors[0].msg);
    }
}

export const createOrder = async (order, dispatch, currentUser) => {
    if (!currentUser?.token) {
        dispatch(createOrderFail("El usuario no está autenticado"));
        return;
    }
    
    try {
        const response = await axios.post(`${BASE_URL}orders`, order, {
            headers: {
                'x-token': currentUser.token,
            },
        });

        // Validar si la respuesta es correcta
        if (response.status === 201) {
            await getOrders(dispatch, currentUser);
        } else {
            dispatch(createOrderFail("Error al crear la orden"));
        }

    } catch (err) {
        console.error(err);
        dispatch(createOrderFail("Error en la creación de la orden"));
        return alert(err.response.data.errors[0].msg);
    }
};
