import { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css"
export default function Home() {
   
    return (
        <div className= "navbar">
            <img src="/https://w7.pngwing.com/pngs/12/377/png-transparent-logo-brand-font-makeup-computer-logo-computer-wallpaper.png.png" alt="logo" className= "logo"/>
            <Link to="/todo" className="button-link"> Entra / Cadastrar-se</Link>
        </div>


    );
}