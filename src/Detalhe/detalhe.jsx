import {useParams} from "react-router-dom";
import Card from '../Components/Card';


export default function Detalhe(){


    const {id} = useParams();
    const lista = JSON.parse(localStorage.getItem("Lista"))
   
    const pessoa = lista.filter( (objeto)=> {
      if(objeto.id == id){
        return objeto;
      }
      return null;
    })
    console.log(pessoa[0]);

    

    return(
       <Card pessoa ={pessoa[0] }/>
    );
}