import React from "react";
import {useParams} from "react-router-dom";
import { useContext } from "react";
import { StateContext } from "../context";
import s from "./Description.module.css";

const Description = () => {
    const {id} = useParams();
    const state = useContext(StateContext);

    const infoState = state.map(x => [x.src, x.name, x.price, x.description, x.total]);

    return (
        <div className={s.wrap}>
            <div className={s.product}>
                <div className={s.picture}>
                    <img src={infoState[id][0]}/>
                </div>
                <div className={s.description}>
                    <div><span className={s.item}>Наименование товара: </span>{infoState[id][1]}</div>
                    <div><span className={s.item}>Цена: </span>{infoState[id][2]} руб.</div>
                    <div><span className={s.item}>Подробное описание: </span>{infoState[id][3]}</div>
                    <div><span className={s.item}>В наличии: </span>{infoState[id][4]} штук</div>
                </div>
            </div>
        </div>
    )
}
export default Description;