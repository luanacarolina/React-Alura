//O useState nos retorna o state atual e uma função que deve ser utilizada para atualizar 
//esse estado, e recebe o estado inicial do componente.
import React , {useState} from 'react';


//componente que conta a quantidade de clicks realizados pelo usuario
function ContaClicks(){
    //vamos utilizar o useState para usar state em um function component!
    const [contador , setContador]= useState(0)// recebemos um contador (estado atual), e um método para atualizá-lo, e o useState recebe 0 que é nosso estado inicial
    return(
        <div>
            <p>Você clicou {contador} vezes</p>
            <button onClick={()=>setContador(contador+1)}>clicar</button>
        </div>
    );
}
export default ContaClicks;

