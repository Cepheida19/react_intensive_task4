import React from "react";
import { NavLink, Outlet} from "react-router-dom";
import s from "./Layout.module.css";


const Layout = () => {
    return (
        <div className={s.wrap}>
        <header className={s.navigation}>
            <NavLink className={s.item} to="/">Главная</NavLink>
            <NavLink className={s.item} to="/about">О магазине</NavLink>
            <NavLink className={s.item} to="/login">Войти</NavLink>
        </header>

        <main className={s.container}>
            <Outlet />
        </main>
        
        <footer className={s.footer}>= 2022 =</footer>
        </div>
    )
}
export default Layout;