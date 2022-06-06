import s from "./Homepage.module.css";
import React, { useState } from "react";
import Product from "./Product";
import homeCapsule from "./../img/capsule.png";
import homePaw from "./../img/paw.png";
import homeTent from "./../img/tent.png";
import homeWarm from "./../img/warm.png";


const Homepage = () => {
    let state=[
            {
            nameInfo: "caspule",
            name: "домик-капсула",
            id: 0,
            price: 2000,
            total: 10,
            src: homeCapsule,
            description: "lalala",
            nowInBasket: 0
        },
             {
            nameInfo: "paw",
            name: "домик-лапка",
            id: 1,
            price: 1850,
            total: 10,
            src: homePaw,
            description: "lalala",
            nowInBasket: 0
        },
             {
            nameInfo: "tent",
            name: "домик-палатка",
            id: 2,
            price: 1950,
            total: 10,
            src: homeTent,
            description: "lalala",
            nowInBasket: 0
        },
            {
            nameInfo: "warm",
            name: "домик-с-подогревом",
            id: 3,
            price: 1700,
            total: 10,
            src: homeWarm,
            description: "lalala",
            nowInBasket: 0
        }
    ];

    const [countInBasketCapsule, setCountInBasketCapsule] = useState(state[0].nowInBasket);
    const [countInBasketPaw, setCountInBasketPaw] = useState(state[1].nowInBasket);
    const [countInBasketTent, setCountInBasketTent] = useState(state[2].nowInBasket);
    const [countInBasketWarm, setCountInBasketWarm] = useState(state[3].nowInBasket);
   

    const countChangeCapsule = () => {
        if(countInBasketCapsule < 10){
            setCountInBasketCapsule(Number(countInBasketCapsule) + 1);
          } else {
            setCountInBasketCapsule(countInBasketCapsule);
          }
    }

    const countChangePaw = () => {
        if(countInBasketPaw < 10){
            setCountInBasketPaw(Number(countInBasketPaw) + 1);
          } else {
            setCountInBasketPaw(countInBasketPaw);
          }
    }

    const countChangeTent = () => {
        if(countInBasketTent < 10){
            setCountInBasketTent(Number(countInBasketTent) + 1);
          } else {
            setCountInBasketTent(countInBasketTent);
          }
    }

    const countChangeWarm = () => {
        if(countInBasketWarm < 10){
            setCountInBasketWarm(Number(countInBasketWarm) + 1);
          } else {
            setCountInBasketWarm(countInBasketWarm);
          }
    }

    return (
        <div className={s.wrap}>
            <header className={s.header}>
                <h2>магазин домиков для кошек</h2>
                <h2 className={s.name}>Лапки-царапки</h2>
            </header>
            <div className={s.products}>
            
                <div className={s.result}>В корзине {countInBasketCapsule + countInBasketPaw + countInBasketTent + countInBasketWarm}   
                  товара(ов) на сумму: {countInBasketCapsule*Number(state[0].price) + countInBasketPaw*Number(state[1].price) +
                       countInBasketTent*Number(state[2].price) + countInBasketWarm*Number(state[3].price)} руб.</div>
                <div className={s.item}>
                    <Product name={state[0].name} img={state[0].src} price={state[0].price}
                        count={countInBasketCapsule} onChange={countChangeCapsule} id={state[0].id}
                    />
                    <Product name={state[1].name} img={state[1].src} price={state[1].price}
                        count={countInBasketPaw} onChange={countChangePaw} id={state[1].id}
                    />
                    <Product name={state[2].name} img={state[2].src} price={state[2].price}
                        count={countInBasketTent} onChange={countChangeTent} id={state[2].id}
                    />
                    <Product name={state[3].name} img={state[3].src} price={state[3].price}
                        count={countInBasketWarm} onChange={countChangeWarm} id={state[3].id}
                    />
                </div>
            </div>
        </div>
    )
}
export default Homepage;