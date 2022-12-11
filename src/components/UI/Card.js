import classes from './Card.module.css';

const Card = (props) =>{
    return (
        <div className={classes.card}>{props.children}</div>
    )
}

export default Card;

//this is a super simple component , is just a wraper compoenent 
