import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Menu'
import itau from '../imagens/doacao/itau.png'
import pix from '../imagens/doacao/pix.png';
import '../estilo/paginas/doacao.css'
import '../estilo/geral.css'
import '../estilo/reset.css'

export default function Doacao() {

  document.title = 'SOS 4 PATAS | DOAÇÃO'

  return (
    <>
  <Header/>
  <div className="container">
    <section>
      <div class="container-como-doar">
        <div class="imagem-como-doar">
          <img src={itau} alt="itau"/>
        </div>
        <p> Agência: 0320 Resende </p>
        <p>Número: 37153-7</p>
        <p>CNPJ: 04.118.264/0001-03</p>
      </div>
      <div class="container-como-doar">
        <div class="imagem-como-doar">
          <img src={pix} alt="pix"/>
        </div>
        <p>CNPJ: 04.118.264/0001-03</p>
      </div>
    </section>
  </div>
  <Footer/>
    </>
  )
}