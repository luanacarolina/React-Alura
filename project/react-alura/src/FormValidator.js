import validador from 'validator';

//Classe que possui o método valida que recebe 
//um state e executa um console.log com a mensagem validado e returna um false
class FormValidator{
    //Criamos um construtor que recebe a validacao
    constructor(validacao){
        this.validacao = validacao;
    }
    valida(state){
        //Pegamos o valor recebido no campo e parseamos os dados para String , pois a biblioteca Validator trabalha somente com strings.
        const campoValor = state[this.validacao.campo.toString()];
        //Em seguida recuperamos o método sendo passado pelo validador(metodoValidacao) a partir de validador[this.validacao.metodo]
        const metodoValidacao = validador[this.validacao.metodo];

        //Se o retorno de metodoValidacao(campoValor,[],state) é true , se positivo nosso formulario é invalido , caso contrario form valido
        if(metodoValidacao(campoValor,[],state)===true){
            console.log("Form Invalido");
            return false;
        }else{
            console.log("Form Valido");
            return true;
        }
    }
}
export default FormValidator;