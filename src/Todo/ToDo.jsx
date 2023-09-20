import { useState } from "react";
import { Link } from "react-router-dom";
import './stily.css';

export default function Todo() {
  const [lista, setLista] = useState([]);
  const [id, setId] = useState(1);
  const [Nome, setNome] = useState("");
  const [Cpf, setCpf] = useState("");
  const [Idade, setIdade] = useState("");
  const [exibirMensagem, setExibirMensagem] = useState(false); 

  function salvar(e) {
    e.preventDefault();
    setLista([...lista, { id: id, Nome: Nome, Idade: Idade }]);
    setId(id + 1);
    setNome("");
    setCpf("");
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
      <h1>Seus dados</h1>
      <form onSubmit={salvar}>
        <div className="input-container">
          <label htmlFor="nome">Nome:</label>
          <input
            id="nome"
            className="pink-border-input"
            onChange={(e) => setNome(e.target.value)}
            type="text"
            value={Nome}
          />
          <label htmlFor="idade">Idade:</label>
          <input
            id="idade"
            className="pink-border-input"
            onChange={(e) => setIdade(e.target.value)}
            type="text"
            value={Idade}
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
              <button className=".button" onClick={() => remover(item.id)}>Remover</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}