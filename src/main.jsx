import React from 'react'
import ReactDOM from 'react-dom'
import './estilo/reset.css'
import Inicio from './pages/Inicio'
import Sobre from './pages/Sobre'
import { BrowserRouter , Switch, Route } from 'react-router-dom'
import Contato from './pages/Contato'
import Ajuda from './pages/Ajuda'
import Servicos from './pages/Servicos'
import Galeria from './pages/Galeria'
import Colaboradores from './pages/Colaboradores'
import Doacao from './pages/Doacao'
import Denuncia from './pages/Denuncia'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path='/' exact={true} component={Inicio}/>
      <Route path='/sobre' exact={true} component={Sobre}/>
      <Route path='/contato' exact={true} component={Contato}/>
      <Route path='/ajuda' exact={true} component={Ajuda}/>
      <Route path='/servicos' exact={true} component={Servicos}/>
      <Route path='/galeria' exact={true} component={Galeria}/>
      <Route path='/colaboradores' exact={true} component={Colaboradores}/>
      <Route path='/denuncia' exact={true} component={Denuncia}/>
      <Route path='/doacao' exact={true} component={Doacao}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
