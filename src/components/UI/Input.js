import React from 'react';

//we can add the input file which is responsible for rendring that input
import classes from './Input.module.css';

const Input = React.forwardRef((props , ref) =>{
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input}/>
        </div>
    )
});

export default Input;


//in Addition i will do a nice trick , i will use spread opearator , this opearator which recive all the input for the label , and added on the input
