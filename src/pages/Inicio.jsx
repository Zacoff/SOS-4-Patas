import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Menu'
import imagem from '../imagens/inicio/animais.png';
import '../estilo/paginas/inicio.css'
import '../estilo/geral.css'
import '../estilo/reset.css'



export default function Inicio() {
  document.title = 'SOS 4 PATAS | INÍCIO'
  return (
    <>
    
  <Header/>
    <div className="container">
        <section>
        <div className="imagem-inicio">
        <img src={imagem} alt="Gato, cachorro e coruja desenhados"/>
        </div>
        <div className="texto-inicio">
        <h1>Seja bem vindo e conheça nossa<br/><span>ONG</span></h1>
        </div>
        </section>
    </div>
  <Footer/>
    </>
  )
}
