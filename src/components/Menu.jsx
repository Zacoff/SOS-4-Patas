import React, { useState } from 'react';
import imagem from '../imagens/geral/SOS-4-Patas.png';
import icons from '../svg/icones.svg';
import '../estilo/componentes/menu.css';
import { Link } from 'react-router-dom';

export default function Menu() {  

  const [state , setState] = useState({clicked : false})

  const listaPaginasEscondidas = [];

  const handleClick = () => {
    setState({clicked : !state.clicked})
  };

  function verificaAdicionaPagina (array , pagina){
    let achou = array.find(el => el === pagina)
    if(!achou) array.push(pagina)
  }

  const adicionaConteudoMenu = (() => {
    let telaLargura = document.body.clientWidth
    let tela = 0;
  
    if(telaLargura <= 550) tela = 1;
  
    switch (tela) {
      case 1:
        verificaAdicionaPagina(listaPaginasEscondidas , "sobre");
        verificaAdicionaPagina(listaPaginasEscondidas , "galeria");
        verificaAdicionaPagina(listaPaginasEscondidas , "colaboradores");
        break;
        
      default:
        verificaAdicionaPagina(listaPaginasEscondidas , "galeria");
        verificaAdicionaPagina(listaPaginasEscondidas , "colaboradores");
        break;
    }
  }
)();

  return (
    
    <header>
      <nav className="barra-menu">
        <div className="imagem-menu">
        <Link to="/"><img src={imagem} alt="SOS-4-Patas"/></Link>
        </div>
          <ul className="menu">
            <li><Link to="/">INÍCIO</Link></li>
            <li><Link to="/sobre">SOBRE</Link></li>
            <li><Link to="/ajuda">AJUDA</Link></li>
            <li><Link to="/servicos">SERVIÇOS</Link></li>
            <li><Link to="/contato">CONTATO</Link></li>
            <li>
            <div onClick={handleClick} className="mais" title="mais-paginas">
                  <svg><title>mais-paginas</title><use xlinkHref={state.clicked ? icons + '#maisX' : icons + '#mais' }/></svg>
                  <div className={state.clicked ? 'barra open' : 'barra'}>
                    <ul>
                      {
                        listaPaginasEscondidas.map((item, i) => {
                          return <li key={i}><Link to={'/' + item}>{item.toUpperCase()}</Link></li>
                        })
                      }
                    </ul>
                  </div>
            </div>
            </li>
          </ul>
        </nav>
    </header> 
  )

  
}