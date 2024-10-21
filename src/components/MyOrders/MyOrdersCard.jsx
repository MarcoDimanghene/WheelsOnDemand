import { useSelector } from 'react-redux';
import CardsMyOrders from './CardsMyOrders';
import { MisOrdenesContainerStyled } from './MyOrdersStyled';
import  Loader from "../UI/Loader/Loader"
const MyOrdersCard = () => {

  const {orders, loading, error} = useSelector(state => state.orders);
  

  if (loading ){
    return <Loader styles={{height: "50px", with: "50px" }}/>
  }

  if (error){
    return <h2 style={{ textAlign: 'center' }}>{error}</h2>;
  }

  return (
    <MisOrdenesContainerStyled>
      {
        Array.isArray(orders) && orders.length ? 
        (
          orders.map((orders)=> {
            return <CardsMyOrders {...orders} key={orders._id} />
          })
        ) :(
          <h2>Haz tu primer pedido</h2>
        )
      }
      
    </MisOrdenesContainerStyled>
  );
};

export default MyOrdersCard;
