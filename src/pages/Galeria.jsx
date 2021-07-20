import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Menu'
import cao from '../imagens/galeria/cao.png';
import gato from '../imagens/galeria/gato.png';
import cao2 from '../imagens/galeria/cao2.png';
import '../estilo/paginas/galeria.css'
import '../estilo/geral.css'
import '../estilo/reset.css'

export default function Galeria() {

  document.title = 'SOS 4 PATAS | GALERIA'

  return (
    <>
  <Header/>
  <div className="container">
  <section>
        <div className="imagem" >
          <img src={cao} alt="cachorro-sorrindo-para-foto"/>
        </div>
        <div className="imagem">
          <img src={gato} alt="gato-recuperado"/>
        </div>
        <div className="imagem">
          <img src={cao2} alt="cachorro-em-recuperação"/>
        </div>
      </section>
    </div>
  <Footer/>
    </>
  )
}