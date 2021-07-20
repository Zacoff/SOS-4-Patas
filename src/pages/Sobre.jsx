import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Menu'
import imagem from '../imagens/sobre/fachada.png'
import '../estilo/paginas/sobre.css'



export default function Sobre() {
  document.title = 'SOS 4 PATAS | SOBRE'
  return (
    <>
    <Header/>
      <div className="container">
        <section>
            <div className="imagem-sobre">
              <img src={imagem} alt="Fachada-SOS-4-Patas"/>
            </div>
            <div className="texto-sobre">
              <p>O SOS 4 Patas – Centro de proteção e defesa dos animais de Resende, é uma Organização fundada em 14 de setembro de 2000, legalmente constituída em 06 de outubro de 2000, declarada de Utilidade Publica Municipal conforme resolução numero 3918 de 16 de abril de 2002, e afiliada ao Fórum Nacional de Proteção e Defesa Animal desde 2004.</p>
              <br/>
              <p>Nossa Organização<span>não visa lucros</span>. Atuamos no âmbito da saúde e da educação humanitária através de atendimento medico-veterinário preferencial a animais de rua e aqueles pertencentes a famílias de baixa renda, e na capacitação de educadores ambientais da rede municipal, enfocando a guarda responsável de animais de estimação, zoonoses e bem-estar animal.</p>
              <br/>
              <p>Acreditamos que toda a sociedade é responsável pelo cuidado com os animais domesticados. Por isso,<span> não possuímos abrigo e não recolhemos animais</span>.</p>
            </div>
        </section>
      </div>
    <Footer/>
    </>
  )
}


