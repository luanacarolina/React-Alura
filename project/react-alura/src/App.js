import React,{Component} from 'react';
import './App.css';
import Tabela from './Tabela';

class App extends Component {
  state = {
    autores :[
      {
        nome:'Paulo',
        livro:'React',
        preco:'1000'
      },
      {
        nome:'Daniel',
        livro:'Java',
        preco:'99'
      },
      {
        nome:'Marcos',
        livro:'Design',
        preco:'150'
      },
      {
        nome:'Nico',
        livro:'Java',
        preco:'999'
      },
      {
        nome:'Bruno',
        livro:'DevOps',
        preco:'100'
      
      },
      {
        nome:'Luana',
      livro:'C++',
      preco:'200'
    
    }
  
    ],
  };
  //Componente criado por meio de uma classe precisa 
  //obrigatoriamente , da declaração do método render().
  //Passamos o retorno para dentro desse metodo.
   render(){
  return (
    //this.state.autores , acessa a chave autores por meio do state
    <div className="App">
      
     <Tabela autores = {this.state.autores}/>
    </div>
  );
}
}
export default App;
