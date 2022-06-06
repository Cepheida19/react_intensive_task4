import React from "react";
import s from "./Product.module.css";
import {Link} from "react-router-dom";


const Product = (props) => {
    

    return (
        <div className={s.wrap}>
            <div className={s.picture}>
                <img src={props.img} />
            </div>
            <div className={s.description}>
                <div><Link to={`/${props.id}`} className={s.name}>{props.name}</Link></div>
                <div className={s.price}>цена: {props.price} руб.</div> 
                <div><button onClick={props.onChange}>добавить в корзину</button>
                <input onChange={props.onChange} value={props.count}/></div>
            </div>
            
        </div>
    )
}
export default Product;