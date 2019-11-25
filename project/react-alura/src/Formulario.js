import React, { Component } from 'react'

class Formulario extends Component {

//Iremos alterar o estado de um elemento através do Construtor
constructor(props){
    //Passamos o props para o componente com o super
    super (props);

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
     //Passa como parametro this.state , enviando as informações do novo autor para o APP.js
     this.props.escutadorDeSubmit(this.state);
     //Zeraremos os campos desse formulario setando-o com this.stateInicial
     this.setState(this.stateInicial)
 }
    render() {
        //Pegamos os valores de state através das chaves nome , livro e preco
        const {nome,livro,preco}= this.state;
        return (
            <form>
                <label htmlFor="nome">Nome</label>
                <input
                    id="nome"
                    type="text"
                    name="nome"
                    value ={nome}
                    onChange = {this.escutadorDeInput}
                />
                <label htmlFor="livro">Livro</label>
                <input
                    id="livro"
                    type="text"
                    name="livro"
                    value ={livro}
                    onChange = {this.escutadorDeInput}
                />
                <label htmlFor="preco">Preço</label>
                <input
                    id ="livro"
                    type = "text"
                    name ="preco"
                    value ={preco}
                    onChange = {this.escutadorDeInput}
                    />
                 {/*O método submitFormulario será disparado no clique do botão Salvar , 
                 com a definição do atributo onClick*/}
                <button type="button" onClick ={this.submitFormulario}>Salvar</button>
            </form>
        )
    }
}
 export default Formulario;


