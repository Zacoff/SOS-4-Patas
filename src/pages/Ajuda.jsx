import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Menu'
import dinheiro from '../imagens/ajuda/dinheiro.png'
import loja from '../imagens/ajuda/loja.png';
import denuncia from '../imagens/ajuda/denuncia.png';
import '../estilo/paginas/ajuda.css'
import '../estilo/geral.css'
import '../estilo/reset.css'
import { Link } from 'react-router-dom'

export default function Ajuda() {

  document.title = 'SOS 4 PATAS | AJUDA'

  return (
    <>
  <Header/>
  <div className="container">
      <section>
        <Link to='/doacao'>
        <div className="imagem-como-ajudar">
          <img src={dinheiro} alt="saiba como doar"/>
          <p>VEJA COMO DOAR</p>
        </div>
        </Link>
        {/* <div className="imagem-como-ajudar">
          <img src={loja} alt="confira nossa loja"/>
          <p>CONFIRA NOSSA LOJA</p>
        </div> */}
        <Link to='/denuncia'>
        <div className="imagem-como-ajudar">
          <img src={denuncia} alt="saiba como denunciar"/>
          <p>SAIBA COMO DENUNCIAR</p>
        </div>
        </Link>
      </section>
    </div>
  <Footer/>
    </>
  )
}