import {useContext, useEffect, useState} from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) =>{
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const CartCtx = useContext(CartContext);

    const { items } = CartCtx;

    const numberOfCartItems = items.reduce((curNumber , item) => {
        return curNumber + item.amount;
    }, 0);


    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if(items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        //we set a timer to remove or add something on the cart
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        //Cleanear function add
        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;