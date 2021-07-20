import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Menu'
import '../estilo/paginas/servicos.css'
import '../estilo/geral.css'
import '../estilo/reset.css'



export default function Servicos() {
  document.title = 'SOS 4 PATAS | SERVIÇOS'
  return (
    <>
  <Header/>
    <div className="container">
      <section>
            <div className="texto-servicos">
              <p>Clínica médica</p>
              <p>Clínica de Silvestres</p>
              <p>Clínica de Felinos</p>
            </div>
            <div className="texto-servicos">
              <p>Cirurgia oncológica</p>
              <p>Cirurgia reconstrutiva</p>
              <p>Cirurgia geral</p>
            </div>
            <div className="texto-servicos">
              <p>Acupuntura</p>
              <p>Odontologia</p>
              <p>Anestesia</p>
            </div>
          </section>
    </div>
  <Footer/>
    </>
  )
}