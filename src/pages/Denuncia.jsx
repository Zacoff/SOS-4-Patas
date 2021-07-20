import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Menu'
import '../estilo/paginas/denuncia.css'
import '../estilo/geral.css'
import '../estilo/reset.css'

export default function Denuncia() {

  document.title = 'SOS 4 PATAS | DENUNCIA'

  return (
    <>
  <Header/>
  <div className="container">
      <section>
        <div className="texto-denuncia">
          <h1>COMO DENUNCIAR:</h1>
          <p>Ministério Público – Acesse o site do MP.</p>
          <p>Polícia Militar – Em caso de necessidade imediata ligue 190.</p>
          <p>Linha Verde do Ibama – 0800 61-8080 ou pelo e-mail para linhaverde.sede@ibama.gov.br.</p>
          <p>Secretaria Especial de Promoção e Defesa dos Animais do Rio de Janeiro – Telefone: 1746 ou no site.</p>
        </div>
      </section>
    </div>
  <Footer/>
    </>
  )
}