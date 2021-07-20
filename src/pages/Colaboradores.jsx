import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Menu'
import clivep from '../imagens/colaboradores/clivep.png';
import contabb from '../imagens/colaboradores/contabb.png';
import forum from '../imagens/colaboradores/forum.png';
import '../estilo/paginas/colaboradores.css'
import '../estilo/geral.css'
import '../estilo/reset.css'

export default function Colaboradores() {

  document.title = 'SOS 4 PATAS | COLABORADORES'

  return (
    <>
  <Header/>
  <div className="container">
      <section>
        <div className="imagem-colaboradores">
          <a href="https://www.clivep.com.br/" target="_blank"><img src={clivep} alt="clivep"/></a>
        </div>
        <div className="imagem-colaboradores">
          <a href="https://www.facebook.com/contabb/" target="_blank"><img src={contabb} alt="contabb"/></a>
        </div>
        <div className="imagem-colaboradores">
          <a href="https://forumanimal.org/" target="_blank"><img src={forum} alt="fórum nacional de proteção e defesa animal"/></a>
        </div>
      </section>
  </div>
  <Footer/>
    </>
  )
}