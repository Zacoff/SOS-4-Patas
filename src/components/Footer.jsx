import React from 'react';
import horizon from '../imagens/geral/HORIZON.png';
import icons from '../svg/icones.svg';
import '../estilo/componentes/footer.css';
export default function Footer(){
  return (
    <footer>
    <div className="texto-rodape"> 
    <p><span> 2021 SOS 4 Patas| Desenvolvido por:</span></p>
      <a href="https://www.instagram.com/horizon.web.brasil/" target="_blank">
        <img src={horizon} alt="HORIZON-logo-empresa-desenvolvedora-do-site"/>
      </a>
    </div> 

    <div className="redes-sociais">
      <a href="https://api.whatsapp.com/send?phone=5524998744741" target="_blank" rel="noopener noreferrer" title="icone para o Whatsapp"><svg><title>Icone para o Whatsapp</title><use xlinkHref={icons + '#whatsapp'}/></svg></a>
      <a href="https://www.instagram.com/sos4patas_resenderj/" target="_blank" rel="noopener noreferrer" title="icone para o Instagram"><svg><title>Icone para o Instagram</title><use xlinkHref={icons + '#instagram'}/></svg></a>
      <a href="https://www.facebook.com/sosquatro.patas.7" target="_blank" rel="noopener noreferrer" title="icone para o Facebook"><svg><title>Icone para o Facebook</title><use xlinkHref={icons + '#facebook'}/></svg></a>
    </div>
    </footer>
  )
}