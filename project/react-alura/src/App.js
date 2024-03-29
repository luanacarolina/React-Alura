import React,{Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './components/Cabecalho/Header';
import './App.css'
import Tabela from './Tabela';
import Form from './Formulario';
import PopUp from './PopUp';


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
    
    PopUp.exibeMensagem('error',"Autor removido com sucesso ");
   }
   escutadorDeSubmit = autor =>{
     //seta o estado do nosso componente utilizando o spread operator ,adicionando a unidade autor que foi recebida
     this.setState({autores:[...this.state.autores,autor]})
     PopUp.exibeMensagem('success',"Autor adicionado com sucesso")
   }
  //Componente criado por meio de uma classe precisa 
  //obrigatoriamente , da declaração do método render().
  //Passamos o retorno para dentro desse metodo.
   render(){
  return (
    //this.state.autores , acessa a chave autores por meio do state
   <>
     <Header/>
     <div className ="container mb-10">
       <h1>Casa Do código</h1>
      <Tabela autores = {this.state.autores} removeAutor = {this.removeAutor}/>
   <Form  escutadorDeSubmit= {this.escutadorDeSubmit}/>
   </div>
   </>// O Fragment retorna tags irmãs sem necessariamente ter um wrapper que as renderize no HTML.
  );
}
}
export default App;


// npm install react-router-dom@5.0.0

// Durante o curso, optei por utilizar uma versão mais atual do JavaScript e 
//por isso, alguns pontos se tornam desnecessários quando relacionados ao curso anterior. 
//Você pode ir mais a fundo assistindo aos cursos de javascript avançado aqui mesmo na Alura.

// Sua primeira dúvida é em relação a inicialização do state fora do constructor, embora isso pareça
// um antipattern, com a versão atual do JS, conseguimos criar o que chamamos de class fields (propriedades). 
//Utilizando dessa forma, não é necessária a utilização de um construtor, deixando seu componente mais conciso 
//(classe sem construtor, não precisamos do this para acessar o state).

// Sua segunda dúvida é sobre o bind utilizado no curso anterior. A diferença é a utilização das Arrow Functions
// e seu comportamento, que é diferente das Functions utilizadas anteriormente. 
//Nas functions, o this terá valores diferentes baseado no local onde essa função foi chamada 
//(por isso era necessário o bind), enquando nas arrow functions isso não acontece, o this sempre terá o
// valor baseado no local de declaração, ou seja, escopo léxico, o que torna o bind no constructor um passo 
//desnecessário.

// Repare, todas as atualizações do React, até o momento, são retrocompativeis, inclusive relacionado à 
//mudanças de versão do JS. Ou seja, a forma anterior ainda é válida e funciona normalmente, mas muito dificilmente
// você verá novos projetos com essa abordagem.