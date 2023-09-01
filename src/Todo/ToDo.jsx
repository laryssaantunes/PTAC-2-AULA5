import { useState } from "react";
import { Link } from "react-router-dom";
export default function todo () {

  const [atividade, setAtividade] = useState("");
  const [lista, setLista] = useState([]);
  const [id,setId] = useState(1);
    const salvar =(e) =>{
        e.preventDefault();
        setLista([...lista, {
                atividade: atividade,
                id: id
        }]);
        setId(id + 1);
        setAtividade("");
    };
    const remover = (id) => {
      setLista(lista.filter((ativ) => (ativ.id !== id ? lista : null)))
      const auxLista = [];
      lista.map((lista) => {
        if(lista.id !== id){
          auxLista.push(lista);
        }
      });
      setLista(auxLista);
    }

  return (
    <div>
      <Link to="/">home</Link>
      <h1>Lista de Atividades</h1>
      <form onSubmit={salvar}>
        <input value={atividade} type="text"
             onChange={(e) => setAtividade(e.target.value)} />

        <button>ADD</button>
      </form>
      {lista.map((ativ)=> <p>{ativ.atividade}</p>)}

    </div>
  ); 
}