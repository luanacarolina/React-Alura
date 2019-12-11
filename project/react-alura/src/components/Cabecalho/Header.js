import React from 'react';
//A tag Link trabalha com rotas sem recarregar a pagina
import {Link} from 'react-router-dom';
// Arrow function que retorna o cabeçalho
const Header = ()=>{
    return(
        <nav>
        <div className="nav-wrapper indigo lighten-2">
          <Link to="/" className="brand-logo">Casa do código</Link>
          <ul className="right">
            <li><Link to="/autores">Autores</Link></li>
            <li><Link to="/Livros">Livros</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
          </ul>
        </div>
      </nav>   
    )
}
export default Header;