import s from "./Homepage.module.css";
import React, { useContext, useState } from "react";
import { StateContext } from "../context";
import { Link, useOutletContext } from "react-router-dom";


const Homepage = () => {
    const isLogin = useOutletContext();
    
    const state = useContext(StateContext);

    const textBasketTrue = "добавить в корзину";
    const textBasketFalse = "Чтобы добавить товар в корзину, залогиньтесь";

    const infoState = state.map(x => [x.src, x.name, x.price]);

    const counts = state.map(x => 0);
    const [count, setCount] = useState(counts);

    const totals = state.map(x => x.total);

    const changeCount = (index) => {
        if(isLogin){
            let copy = Object.assign([], count);
            let ind = index;
            if(copy[ind] < totals[ind]){
                copy[ind] += 1;
            } else {
                copy[ind] = copy[ind];
            }
            setCount(copy);
        } else {
            setCount(count);
        }

    }

    const sumProducts = count.reduce((s, c) => s + c, 0);
    const sumPrice1 = count.map((x,index) => x * state[index].price);
    const sumPrice = sumPrice1.reduce((s, c) => s + c, 0);
 
    return (
        <div className={s.wrap}>
            <header className={s.header}>
                <h2>магазин домиков для кошек</h2>
                <h2 className={s.name}>Лапки-царапки</h2>
            </header>
            <div className={s.products}>
                <div className={s.result}>В корзине {sumProducts} товара(ов) на сумму: {sumPrice} руб.</div>
                <div className={s.wrapItem}>
                    {infoState.map((x, index) => <div className={s.item}>
                        <div className={s.picture}><img src={x[0]}></img></div>
                        <div className={s.description}>
                            <div>
                                <Link className={s.name} to={`/${index}`}>{x[1]}</Link>
                            </div>
                            <div className={s.price}>цена: {x[2]} руб.</div>
                            <div><button onClick={() => changeCount(index)} type="button">{isLogin ? textBasketTrue : textBasketFalse}</button>
                            <input type="text" readOnly value={count[index]}/>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}
export default Homepage;