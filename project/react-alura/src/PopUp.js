import M from 'materialize-css';


//Constante Json contendo a chave exibirMensagem
const PopUp = {
    //Função que verifica se precisamos exibir uma mensagem de erro ou sucesso
    exibeMensagem :(status , msg) =>{
        //Se o status for = a success chamaremos um M.toast para criar um toast com 3 especificações diferentes 
        if (status ==='success'){
            M.toast({html:msg,classes:'green',displayLength:2000});

        }
        if (status ==='error'){
            M.toast({html:msg,classes:'red',displayLength:2000});
        }
    }
}
export default PopUp;