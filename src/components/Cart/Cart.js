import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = (props) =>{
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    //Making Item removable
    const CartItemRemoveHandler = (id) =>{
        cartCtx.removeItem(id);
    }
    //making Item adding
    const CartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
    }

    const cartItems = 
    <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => (
        <CartItem 
        key={item.id} 
        name={item.name} 
        amount={item.amount} 
        price={item.price} 
        onRemove={CartItemRemoveHandler.bind(null, item.id)} 
        onAdd={CartItemAddHandler.bind(null, item)}
        />
        ))}
        </ul>;
    
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;

//With the bind() method, an object can borrow a method from another object.