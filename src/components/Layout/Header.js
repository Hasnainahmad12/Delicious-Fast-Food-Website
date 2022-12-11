import React,{Fragment} from "react";

import mealsImage from '../../assests/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) =>{
    return (
        //Freagment means wraping the multiple components
        <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            {/*i will create the button and put there button cart component*/}
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table is full of delicious food!!" />
        </div>
        </Fragment>
    ) 
}

export default Header;