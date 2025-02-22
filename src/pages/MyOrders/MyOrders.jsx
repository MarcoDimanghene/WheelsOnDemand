import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/UI/Button/Button';
import { useEffect } from 'react';
import { getOrders } from '../../axios/axios-orders';
import { clearError, fetchOrdersFail } from '../../redux/orders/orderSlice';
import MyOrdersCard from '../../components/MyOrders/MyOrdersCard';
import { MisOrdenesBtnContainerStyled, MisOrdenesContainerStyled, MisOrdenesTitleStyled } from './MyOrdersStyled';

const MyOrders = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);
  const { orders,  error } = useSelector(state => state.orders);

  

  useEffect(() => {
    if (!orders) {
      getOrders(dispatch, currentUser)
    }

    if (!currentUser?.token) {
      dispatch(fetchOrdersFail());
    } else {
      error && dispatch(clearError());
    }
  }, [dispatch, currentUser?.token, orders, error]);

  return (
    <MisOrdenesContainerStyled>
      <MisOrdenesTitleStyled>Mis órdenes</MisOrdenesTitleStyled>
      <MyOrdersCard />
      <MisOrdenesBtnContainerStyled>
        <Button onClick={() => navigate('/')}>Volver a comprar</Button>
      </MisOrdenesBtnContainerStyled>
    </MisOrdenesContainerStyled>
  );
};

export default MyOrders;
