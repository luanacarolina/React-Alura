import React, { Component } from 'react'
import FormValidator from './FormValidator';

class Formulario extends Component {

//Iremos alterar o estado de um elemento através do Construtor
constructor(props){
    //Passamos o props para o componente com o super
    super (props);
    //Criamos uma instancia de da classe FormValidator
    //que recebe um obj JSON com a regra de validação do campo , composta pelo nome do campo 
    //e o método que queremos utilizar do Validator , por exemplo isEmpty().
    this.validador = new FormValidator({
        campo: 'nome',
        metodo:'isEmpty'
        
    });

    //Criamos um obj com o estado inicial do nosso form
    this.stateInicial = {
        nome:'',
        livro:'',
        preco:'',
    }
    //setamos o state com o stateInicial
    this.state = this.stateInicial;
}

//a partir do event.target , pegaremos o name e o value do campo
escutadorDeInput = event =>{
     const {name,value} = event.target;

     //A cada evento disparado de mudança de input,queremos atualizar o estado
     //do componente para que a mudança seja refletida na tela.Faremos isso por meio
     //do setState() , para a partir do name , colocar o value
     this.setState({
         [name]:value
     });
}
//Método que irá a partir do props , chamar o escutadorDeSubmit 
 submitFormulario = () =>{
     //Verificamos o retorno da chamada do método valida , quando o botão salvar
     //do formulario enviar as informaçoes , adicionando um elemento na tela
     if(this.validador.valida(this.state)){
     //Passa como parametro this.state , enviando as informações do novo autor para o APP.js
     this.props.escutadorDeSubmit(this.state);
     //Zeraremos os campos desse formulario setando-o com this.stateInicial
     this.setState(this.stateInicial)
 }
}
    render() {
        //Pegamos os valores de state através das chaves nome , livro e preco
        const {nome,livro,preco}= this.state;
        return (
            <form>
                <div className ="row">
                    <div className ="input-field col s4">
                <label className ="input-field" htmlFor="nome">Nome</label>
                <input
                    id="nome"
                    type="text"
                    name="nome"
                    value ={nome}
                    onChange = {this.escutadorDeInput}
                />
                </div>
                <div className ="input-field col s4">
                <label className ="input-field" htmlFor="livro">Livro</label>
                <input
                    id="livro"
                    type="text"
                    name="livro"
                    value ={livro}
                    onChange = {this.escutadorDeInput}
                />
                </div>
                <div className ="input-field col s4">
                <label className ="input-field" htmlFor="preco">Preço</label>
                <input
                    id ="livro"
                    type = "text"
                    name ="preco"
                    value ={preco}
                    onChange = {this.escutadorDeInput}
                    />
                    </div>
                 {/*O método submitFormulario será disparado no clique do botão Salvar , 
                 com a definição do atributo onClick*/}
                 </div>
                <button className ="waves-effect waves-light indigo lighten-2 btn" type="button" onClick ={this.submitFormulario}>Salvar</button>
            </form>
        )
    }
}
 export default Formulario;


