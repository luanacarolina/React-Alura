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
  //Método que remove um elemento do array autores.
   removeAutor = index =>{
     //constante autores recebendo this.state.
    const {autores} = this.state;
    
    //Como não é possível alterar um state diretamente, teremos 
    //que utilizar um método específico do React para efetuar 
    //essa alteração, chamado setState(). Esse método recebe um JSON
    // que servirá para fazer o merge dos dados que já estão no 
    //state e aqueles que estão sendo passados
    this.setState(
      {
        //chamaremos o método filter(), dentro do qual escreveremos
        // um método que recebe o autor (a unidade dentro de autores) e a 
        //posAtual dessa iteração.
        autores:autores.filter((autor,posAtual)=>{
          console.log(index,posAtual);

          //Exclui  um autor quando a posição
          // da iteração atual for igual ao index sendo recebido
          return posAtual!==index;
        }),
      }
    );
   }

  //Componente criado por meio de uma classe precisa 
  //obrigatoriamente , da declaração do método render().
  //Passamos o retorno para dentro desse metodo.
   render(){
  return (
    //this.state.autores , acessa a chave autores por meio do state
    <div className="App">
      
     <Tabela autores = {this.state.autores} removeAutor = {this.removeAutor}/>
    </div>
  );
}
}
export default App;
