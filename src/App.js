import React,{useState} from 'react';
import './App.css';
function App(){
  const [tarefa, setTarefa]= useState('');
  const[lista,setLista]=useState([]);

  function onSubmit(event){
    event.preventDefault();
    setLista([...lista,tarefa]);
    console.log(lista.tarefa);
  }
  function remover(item){
    setLista(lista.filter(x=>x !=item))
  }
  return(
    <div className="container">
      <div className="header">
      <h1>To Do- ltp6</h1>
      <form onSubmit={onSubmit}>
        <input placeholder=" "
        className="Task"
        value={tarefa}
        onChange={(e)=>setTarefa(e.target.value)}/>
        <button className="adcionar"><fiPlus size={10}/>Adcionar Tarefa</button>
      </form>
    </div>
    <ul>
      {lista.map(item=>
        <li>
          <p1>"Tarefa- "</p1>
          {item}
          <button onClick={()=> remover(item)} className="X"><fiPlus size={50}/>   X  </button>
        </li>
        )}
    </ul>
    </div>
  );
}

export default App;
