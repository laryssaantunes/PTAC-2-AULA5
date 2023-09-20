import { useState } from "react";
import { Link } from "react-router-dom";
import './stily.css';

export default function Todo() {
  const [lista, setLista] = useState([]);
  const [id, setId] = useState(1);
  const [Nome, setNome] = useState("");
  const [Imagem, setImagem] = useState("");
  const [Idade, setIdade] = useState("");
  const [exibirMensagem, setExibirMensagem] = useState(false); 

  function salvar(e) {
    e.preventDefault();
    setLista([...lista, { id: id, Nome: Nome, Idade: Idade, Imagem: Imagem }]);
    setId(id + 1);
    setNome("");
    setImagem("");
    setIdade("");
    setExibirMensagem(true); 
  }

  const remover = (id) => {
    const listaFiltrada = lista.filter((item) => item.id !== id);
    setLista(listaFiltrada);
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <h1>Informe seus dados</h1>
      <form onSubmit={salvar}>
        <div className="input-container">
          <label htmlFor="nome">Nome:</label>
          <input
            id="nome"
            className="border-input"
            onChange={(e) => setNome(e.target.value)}
            type="text"
            value={Nome}
          />
          <label htmlFor="idade">Idade:</label>
          <input
            id="idade"
            className="border-input"
            onChange={(e) => setIdade(e.target.value)}
            type="text"
            value={Idade}
          />
          <label htmlFor="Imagem">Imagem:</label>
          <input
            id="Imagem"
            className="border-input"
            onChange={(e) => setImagem(e.target.value)}
            type="text"
            value={Imagem}
          />
          <button className="button">add</button>
        </div>
      </form>

      <div>
        <div className="values-area">
          {lista.map((item) => (
            <div key={item.id}>
              <p>Nome: {item.Nome}</p>
              <p>Idade: {item.Idade}</p>
              <img src= {item.Imagem} alt="" />
              <button className=".button" onClick={() => remover(item.id)}>Remover</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}