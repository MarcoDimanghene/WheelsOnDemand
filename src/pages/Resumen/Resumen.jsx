import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { formatPrice } from '../../utils';

import CardResumen from '../../components/Resumen/CardResumen';
import Link from '../../components/UI/Link/Link';

import {
  CostoEnvioStyled,
  CostoProductoStyled,
  CostoTotalStyled,
  H1TitleStyled,
  HrStyled,
  ProductsContainerStyled,
  ResumenContainerInfoStyled,
  ResumenContainerStyled,
  ResumenTitleStyled,
} from './ResumenStyles';
import { getOrders } from '../../axios/axios-orders';

const Resumen = () => {
  const [visitedOrder, setVisitedOrder] = useState(null);
  const currentUser = useSelector(state => state.user.currentUser);
  const orders = useSelector(state => state.orders.orders);
  const dispatch = useDispatch();
  const { orderId } = useParams();

  useEffect(() => {
    if (!orders) {
      dispatch(getOrders(dispatch, currentUser?.token));
    }
    setVisitedOrder(orders?.find(order => order._id === orderId));
  }, [orderId, currentUser?.id, orders, dispatch]);

  return (
    <ResumenContainerStyled>
      <ResumenTitleStyled>
        <H1TitleStyled>Resumen Orden: #{visitedOrder?._id.slice(0, 7)}</H1TitleStyled>
        <Link borderRadius='20' to='/mis-ordenes'></Link>
      </ResumenTitleStyled>
      <h2>Productos:</h2>
      <ProductsContainerStyled>
        {visitedOrder?.items.map(item => (
          <CardResumen key={item._id} {...item} />
        ))}
      </ProductsContainerStyled>
      <HrStyled />
      <ResumenContainerInfoStyled>
        <h3>Costos:</h3>
        <CostoProductoStyled>
          <p>Costo de productos</p>
          <span>{formatPrice(visitedOrder?.price)}</span>
        </CostoProductoStyled>
        <CostoEnvioStyled>
          <p>Costo de envío</p>
          <span>{formatPrice(visitedOrder?.shippingCost)}</span>
        </CostoEnvioStyled>
        <CostoTotalStyled>
          <p>Total</p>
          <span>{formatPrice(visitedOrder?.total)}</span>
        </CostoTotalStyled>
      </ResumenContainerInfoStyled>
    </ResumenContainerStyled>
  );
};

export default Resumen;