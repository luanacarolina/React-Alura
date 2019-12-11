import React, { Component } from 'react'
import FormValidator from './FormValidator';
import PopUp from './PopUp';

class Formulario extends Component {

    //Iremos alterar o estado de um elemento através do Construtor
    constructor(props) {
        //Passamos o props para o componente com o super
        super(props);
        //Criamos uma instancia de da classe FormValidator
        //que recebe um obj JSON com a regra de validação do campo , composta pelo nome do campo 
        //e o método que queremos utilizar do Validator , por exemplo isEmpty().
        this.validador = new FormValidator([
            {
                campo: 'nome',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com um nome'
            },
            {
                campo: 'livro',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com um livro'
            },
            {
                campo: 'preco',
                metodo: 'isInt',
                args: [{ min: 0, max: 99999 }],
                validoQuando: true,
                mensagem: 'Entre com um valor numérico'
            }
        ]);

        //Criamos um obj com o estado inicial do nosso form
        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
        }
        //setamos o state com o stateInicial
        this.state = this.stateInicial;
    }

    //a partir do event.target , pegaremos o name e o value do campo
    escutadorDeInput = event => {
        const { name, value } = event.target;

        //A cada evento disparado de mudança de input,queremos atualizar o estado
        //do componente para que a mudança seja refletida na tela.Faremos isso por meio
        //do setState() , para a partir do name , colocar o value
        this.setState({
            [name]: value
        });
    }
    //Método que irá a partir do props , chamar o escutadorDeSubmit 
    submitFormulario = () => {
        //criamos uma constante validacao recebendo chamada de this.validador.valida() com o parametro this.state
        const validacao = this.validador.valida(this.state);

        //No operador if faremos validacao.isValid , caso positivo mudaremos o state da aplicação , adicionaremos um elemento novo.
        //E isso refletira na tela .Do contrario (else), recuperamos os campos que tiveram erro e exibimos suas respectivas mensagens na tela.
        if (validacao.isValid) {
            //Passa como parametro this.state , enviando as informações do novo autor para o APP.js
            this.props.escutadorDeSubmit(this.state);
            //Zeraremos os campos desse formulario setando-o com this.stateInicial
            this.setState(this.stateInicial)
        } else {
            //A partir de validacao recuperamos {nome,livro,preco}
            const { nome, livro, preco } = validacao;
            //E os armazenamos em um array campos
            const campos = [nome, livro, preco];

            //Criamos uma constante camposInvalidos , filtramos os elementos do array (elem) e aplicaremos
            //uma regra - no caso ,elem.isInvalid
            const camposInvalidos = campos.filter(elem => {
                return elem.isInvalid;
            });
            //Para cada elemento em camposInvalidos , faremos um loop(forEach())
            //para cada mensagem de erro receberemos um campo e , para cada campo,chamaremosPop.exibeMensagem()
            camposInvalidos.forEach(campo=>{
                PopUp.exibeMensagem('error',campo.message)
            });
        }
      
    }
    render() {
        //Pegamos os valores de state através das chaves nome , livro e preco
        const { nome, livro, preco } = this.state;
        return (
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="nome">Nome</label>
                        <input
                        className = "validate"
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={this.escutadorDeInput}
                        />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="livro">Livro</label>
                        <input
                        className = "validate"
                            id="livro"
                            type="text"
                            name="livro"
                            value={livro}
                            onChange={this.escutadorDeInput}
                        />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="preco">Preço</label>
                        <input
                        className = "validate"
                            id="livro"
                            type="text"
                            name="preco"
                            value={preco}
                            onChange={this.escutadorDeInput}
                        />
                    </div>
                    {/*O método submitFormulario será disparado no clique do botão Salvar , 
                 com a definição do atributo onClick*/}
                </div>
                <button className="waves-effect waves-light indigo lighten-2 btn" type="button" onClick={this.submitFormulario}>Salvar</button>
            </form>
        )
    }
}
export default Formulario;


