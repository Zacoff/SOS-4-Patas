import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Menu'
import imagem from '../imagens/contato/mapa.png';
import icons from '../svg/icones.svg';
import '../estilo/paginas/contato.css'
import '../estilo/geral.css'
import '../estilo/reset.css'

export default function Contato() {
  document.title = 'SOS 4 PATAS | CONTATO'
  return (
    <>
    
  <Header/>
  <section>
    <div className="mapa">
        <a href="https://www.google.com/maps/place/SOS+4+Patas+Centro+de+Prote%C3%A7%C3%A3o+e+Defesa+Animais/@-22.475125,-44.503302,16z/data=!4m5!3m4!1s0x0:0x694b70b4a1eedc53!8m2!3d-22.475125!4d-44.503302?hl=pt-BR" target="_blank" rel="noopener noreferrer"><img src={imagem} alt="mapa"/></a>
    </div>

      <div className="texto-contato">
        <div className="info">
          <svg><use xlinkHref={icons + '#email'}/></svg>
          <p>Av. Projetada 578 - Toyota II, Resende/RJ</p>
        </div>
        <div className="info">
          <svg><use xlinkHref={icons + '#telefone'}/></svg>
          <p>+55 (24) 3360-8070</p>
        </div> 
        <div className="info">
          <svg><use xlinkHref={icons + '#email'}/></svg>
          <p>contato@sos4patas.org.br</p>
        </div>
        <div className="info">
          <svg><use xlinkHref={icons + '#relogio'}/></svg>
          <p>Segunda à Sexta » 9:00 - 17:00 | Sábado » 9:00 - 14:30</p>
        </div>
      </div>
    </section>
  <Footer/>
    </>
  )
}