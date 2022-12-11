import { useContext } from 'react';

import MealItemFrom from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';

const MealItem = (props) =>{
    const cartCtx = useContext(CartContext);

    //two dollar sign one for the output and the 2nd is the compination of the curliburses
    const price = `$${props.price.toFixed(2)}`;
    
    const addToCartHandler = amount =>{
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemFrom onAddToCart={addToCartHandler}/>
            </div>
        </li>
    )
}

export default MealItem;