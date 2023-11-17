import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div className="navbar">
        <img src="https://img.elo7.com.br/product/zoom/3CFE288/logo-semi-pronta-logomarca-maquiagem-makeup-logo-rosa.jpg" alt="Logo" className="logo" />
        <Link to="/todo" className="button-link">
          Entrar / Cadastrar-se
        </Link>
      </div>

      <div className="laryssa">
        <h2>Bem-vindo à Nossa Lista!</h2>
        <img src="https://www.selecoes.com.br/media/_versions/2023/07/maquiagem-influenciadoras-brasileiras_widemd.jpg" alt="" ></img>
        <h2>Kit de maquiagem </h2>
        <p>R$230,00 Reais</p>
       
      </div>

      <div className="laryssa1">
       <img src="https://www.selecoes.com.br/media/_versions/2023/07/maquiagem-influenciadoras-brasileiras_widemd.jpg" alt="" />
        <h2>Kit de maquiagem </h2>
        <p>R$230,00 Reais</p>
       
      </div>

      <div className="laryssa2">
      <img src="https://www.selecoes.com.br/media/_versions/2023/07/maquiagem-influenciadoras-brasileiras_widemd.jpg" alt="" />
        <h2>Kit de maquiagem </h2>
        <p>R$230,00 Reais</p>
      </div>

      <div className="laryssa3">
      <img src="https://www.selecoes.com.br/media/_versions/2023/07/maquiagem-influenciadoras-brasileiras_widemd.jpg" alt="" />
        <h2>Kit de maquiagem </h2>
        <p>R$230,00 Reais</p>
      </div>

    </div>
  );
}