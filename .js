import {R as e, D as a, L as t, a as n, B as l, b as r} from "./vendor.ae687c75.js";
var c = "./assets/icones.211aea8d.svg";
function m() {
    return e.createElement("footer", null, e.createElement("div", {
        className: "texto-rodape"
    }, e.createElement("p", null, e.createElement("span", null, " 2021 SOS 4 Patas| Desenvolvido por:")), e.createElement("a", {
        href: "https://www.instagram.com/horizon.web.brasil/",
        target: "_blank"
    }, e.createElement("img", {
        src: "./assets/HORIZON.d6d9a5b5.png",
        alt: "HORIZON-logo-empresa-desenvolvedora-do-site"
    }))), e.createElement("div", {
        className: "redes-sociais"
    }, e.createElement("a", {
        href: "https://api.whatsapp.com/send?phone=5524998744741",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "icone para o Whatsapp"
    }, e.createElement("svg", null, e.createElement("title", null, "Icone para o Whatsapp"), e.createElement("use", {
        xlinkHref: c + "#whatsapp"
    }))), e.createElement("a", {
        href: "https://www.instagram.com/sos4patas_resenderj/",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "icone para o Instagram"
    }, e.createElement("svg", null, e.createElement("title", null, "Icone para o Instagram"), e.createElement("use", {
        xlinkHref: c + "#instagram"
    }))), e.createElement("a", {
        href: "https://www.facebook.com/sosquatro.patas.7",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "icone para o Facebook"
    }, e.createElement("svg", null, e.createElement("title", null, "Icone para o Facebook"), e.createElement("use", {
        xlinkHref: c + "#facebook"
    })))))
}
function o() {
    const [n,l] = a.exports.useState({
        clicked: !1
    })
      , r = [];
    function m(e, a) {
        e.find((e=>e === a)) || e.push(a)
    }
    return (()=>{
        let e = 0;
        switch (document.body.clientWidth <= 550 && (e = 1),
        e) {
        case 1:
            m(r, "sobre"),
            m(r, "galeria"),
            m(r, "colaboradores");
            break;
        default:
            m(r, "galeria"),
            m(r, "colaboradores")
        }
    }
    )(),
    e.createElement("header", null, e.createElement("nav", {
        className: "barra-menu"
    }, e.createElement("div", {
        className: "imagem-menu"
    }, e.createElement(t, {
        to: "/"
    }, e.createElement("img", {
        src: "./assets/SOS-4-Patas.789eb264.png",
        alt: "SOS-4-Patas"
    }))), e.createElement("ul", {
        className: "menu"
    }, e.createElement("li", null, e.createElement(t, {
        to: "/"
    }, "INÍCIO")), e.createElement("li", null, e.createElement(t, {
        to: "/sobre"
    }, "SOBRE")), e.createElement("li", null, e.createElement(t, {
        to: "/ajuda"
    }, "AJUDA")), e.createElement("li", null, e.createElement(t, {
        to: "/servicos"
    }, "SERVIÇOS")), e.createElement("li", null, e.createElement(t, {
        to: "/contato"
    }, "CONTATO")), e.createElement("li", null, e.createElement("div", {
        onClick: ()=>{
            l({
                clicked: !n.clicked
            })
        }
        ,
        className: "mais",
        title: "mais-paginas"
    }, e.createElement("svg", null, e.createElement("title", null, "mais-paginas"), e.createElement("use", {
        xlinkHref: n.clicked ? c + "#maisX" : c + "#mais"
    })), e.createElement("div", {
        className: n.clicked ? "barra open" : "barra"
    }, e.createElement("ul", null, r.map(((a,n)=>e.createElement("li", {
        key: n
    }, e.createElement(t, {
        to: "/" + a
    }, a.toUpperCase())))))))))))
}
n.render(e.createElement(e.StrictMode, null, e.createElement(l, null, e.createElement(r, {
    path: "/",
    exact: !0,
    component: function() {
        return document.title = "SOS 4 PATAS | INÍCIO",
        e.createElement(e.Fragment, null, e.createElement(o, null), e.createElement("div", {
            className: "container"
        }, e.createElement("section", null, e.createElement("div", {
            className: "imagem-inicio"
        }, e.createElement("img", {
            src: "./assets/animais.3aadadb0.png",
            alt: "Gato, cachorro e coruja desenhados"
        })), e.createElement("div", {
            className: "texto-inicio"
        }, e.createElement("h1", null, "Seja bem vindo e conheça nossa", e.createElement("br", null), e.createElement("span", null, "ONG"))))), e.createElement(m, null))
    }
}), e.createElement(r, {
    path: "/sobre",
    exact: !0,
    component: function() {
        return document.title = "SOS 4 PATAS | SOBRE",
        e.createElement(e.Fragment, null, e.createElement(o, null), e.createElement("div", {
            className: "container"
        }, e.createElement("section", null, e.createElement("div", {
            className: "imagem-sobre"
        }, e.createElement("img", {
            src: "./assets/fachada.775634ce.png",
            alt: "Fachada-SOS-4-Patas"
        })), e.createElement("div", {
            className: "texto-sobre"
        }, e.createElement("p", null, "O SOS 4 Patas – Centro de proteção e defesa dos animais de Resende, é uma Organização fundada em 14 de setembro de 2000, legalmente constituída em 06 de outubro de 2000, declarada de Utilidade Publica Municipal conforme resolução numero 3918 de 16 de abril de 2002, e afiliada ao Fórum Nacional de Proteção e Defesa Animal desde 2004."), e.createElement("br", null), e.createElement("p", null, "Nossa Organização", e.createElement("span", null, "não visa lucros"), ". Atuamos no âmbito da saúde e da educação humanitária através de atendimento medico-veterinário preferencial a animais de rua e aqueles pertencentes a famílias de baixa renda, e na capacitação de educadores ambientais da rede municipal, enfocando a guarda responsável de animais de estimação, zoonoses e bem-estar animal."), e.createElement("br", null), e.createElement("p", null, "Acreditamos que toda a sociedade é responsável pelo cuidado com os animais domesticados. Por isso, ", e.createElement("span", null, "não possuímos abrigo e não recolhemos animais"), ".")))), e.createElement(m, null))
    }
}), e.createElement(r, {
    path: "/contato",
    exact: !0,
    component: function() {
        return document.title = "SOS 4 PATAS | CONTATO",
        e.createElement(e.Fragment, null, e.createElement(o, null), e.createElement("section", null, e.createElement("div", {
            className: "mapa"
        }, e.createElement("a", {
            href: "https://www.google.com/maps/place/SOS+4+Patas+Centro+de+Prote%C3%A7%C3%A3o+e+Defesa+Animais/@-22.475125,-44.503302,16z/data=!4m5!3m4!1s0x0:0x694b70b4a1eedc53!8m2!3d-22.475125!4d-44.503302?hl=pt-BR",
            target: "_blank",
            rel: "noopener noreferrer"
        }, e.createElement("img", {
            src: "./assets/mapa.f36b2cc6.png",
            alt: "mapa"
        }))), e.createElement("div", {
            className: "texto-contato"
        }, e.createElement("div", {
            className: "info"
        }, e.createElement("svg", null, e.createElement("use", {
            xlinkHref: c + "#email"
        })), e.createElement("p", null, "Av. Projetada 578 - Toyota II, Resende/RJ")), e.createElement("div", {
            className: "info"
        }, e.createElement("svg", null, e.createElement("use", {
            xlinkHref: c + "#telefone"
        })), e.createElement("p", null, "+55 (24) 3360-8070")), e.createElement("div", {
            className: "info"
        }, e.createElement("svg", null, e.createElement("use", {
            xlinkHref: c + "#email"
        })), e.createElement("p", null, "contato@sos4patas.org.br")), e.createElement("div", {
            className: "info"
        }, e.createElement("svg", null, e.createElement("use", {
            xlinkHref: c + "#relogio"
        })), e.createElement("p", null, "Segunda à Sexta » 9:00 - 17:00 | Sábado » 9:00 - 14:30")))), e.createElement(m, null))
    }
}), e.createElement(r, {
    path: "/ajuda",
    exact: !0,
    component: function() {
        return document.title = "SOS 4 PATAS | AJUDA",
        e.createElement(e.Fragment, null, e.createElement(o, null), e.createElement("div", {
            className: "container"
        }, e.createElement("section", null, e.createElement(t, {
            to: "/doacao"
        }, e.createElement("div", {
            className: "imagem-como-ajudar"
        }, e.createElement("img", {
            src: "./assets/dinheiro.6ed11f35.png",
            alt: "saiba como doar"
        }), e.createElement("p", null, "VEJA COMO DOAR"))), e.createElement(t, {
            to: "/denuncia"
        }, e.createElement("div", {
            className: "imagem-como-ajudar"
        }, e.createElement("img", {
            src: "data:image/png;base64,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",
            alt: "saiba como denunciar"
        }), e.createElement("p", null, "SAIBA COMO DENUNCIAR"))))), e.createElement(m, null))
    }
}), e.createElement(r, {
    path: "/servicos",
    exact: !0,
    component: function() {
        return document.title = "SOS 4 PATAS | SERVIÇOS",
        e.createElement(e.Fragment, null, e.createElement(o, null), e.createElement("div", {
            className: "container"
        }, e.createElement("section", null, e.createElement("div", {
            className: "texto-servicos"
        }, e.createElement("p", null, "Clínica médica"), e.createElement("p", null, "Clínica de Silvestres"), e.createElement("p", null, "Clínica de Felinos")), e.createElement("div", {
            className: "texto-servicos"
        }, e.createElement("p", null, "Cirurgia oncológica"), e.createElement("p", null, "Cirurgia reconstrutiva"), e.createElement("p", null, "Cirurgia geral")), e.createElement("div", {
            className: "texto-servicos"
        }, e.createElement("p", null, "Acupuntura"), e.createElement("p", null, "Odontologia"), e.createElement("p", null, "Anestesia")))), e.createElement(m, null))
    }
}), e.createElement(r, {
    path: "/galeria",
    exact: !0,
    component: function() {
        return document.title = "SOS 4 PATAS | GALERIA",
        e.createElement(e.Fragment, null, e.createElement(o, null), e.createElement("div", {
            className: "container"
        }, e.createElement("section", null, e.createElement("div", {
            className: "imagem"
        }, e.createElement("img", {
            src: "./assets/cao.e2b83195.png",
            alt: "cachorro-sorrindo-para-foto"
        })), e.createElement("div", {
            className: "imagem"
        }, e.createElement("img", {
            src: "./assets/gato.62bd0ccf.png",
            alt: "gato-recuperado"
        })), e.createElement("div", {
            className: "imagem"
        }, e.createElement("img", {
            src: "./assets/cao2.c8237532.png",
            alt: "cachorro-em-recuperação"
        })))), e.createElement(m, null))
    }
}), e.createElement(r, {
    path: "/colaboradores",
    exact: !0,
    component: function() {
        return document.title = "SOS 4 PATAS | COLABORADORES",
        e.createElement(e.Fragment, null, e.createElement(o, null), e.createElement("div", {
            className: "container"
        }, e.createElement("section", null, e.createElement("div", {
            className: "imagem-colaboradores"
        }, e.createElement("a", {
            href: "https://www.clivep.com.br/",
            target: "_blank"
        }, e.createElement("img", {
            src: "./assets/clivep.3874196d.png",
            alt: "clivep"
        }))), e.createElement("div", {
            className: "imagem-colaboradores"
        }, e.createElement("a", {
            href: "https://www.facebook.com/contabb/",
            target: "_blank"
        }, e.createElement("img", {
            src: "./assets/contabb.8f7467ee.png",
            alt: "contabb"
        }))), e.createElement("div", {
            className: "imagem-colaboradores"
        }, e.createElement("a", {
            href: "https://forumanimal.org/",
            target: "_blank"
        }, e.createElement("img", {
            src: "./assets/forum.57856426.png",
            alt: "fórum nacional de proteção e defesa animal"
        }))))), e.createElement(m, null))
    }
}), e.createElement(r, {
    path: "/denuncia",
    exact: !0,
    component: function() {
        return document.title = "SOS 4 PATAS | DENUNCIA",
        e.createElement(e.Fragment, null, e.createElement(o, null), e.createElement("div", {
            className: "container"
        }, e.createElement("section", null, e.createElement("div", {
            className: "texto-denuncia"
        }, e.createElement("h1", null, "COMO DENUNCIAR:"), e.createElement("p", null, "Ministério Público – Acesse o site do MP."), e.createElement("p", null, "Polícia Militar – Em caso de necessidade imediata ligue 190."), e.createElement("p", null, "Linha Verde do Ibama – 0800 61-8080 ou pelo e-mail para linhaverde.sede@ibama.gov.br."), e.createElement("p", null, "Secretaria Especial de Promoção e Defesa dos Animais do Rio de Janeiro – Telefone: 1746 ou no site.")))), e.createElement(m, null))
    }
}), e.createElement(r, {
    path: "/doacao",
    exact: !0,
    component: function() {
        return document.title = "SOS 4 PATAS | DOAÇÃO",
        e.createElement(e.Fragment, null, e.createElement(o, null), e.createElement("div", {
            className: "container"
        }, e.createElement("section", null, e.createElement("div", {
            class: "container-como-doar"
        }, e.createElement("div", {
            class: "imagem-como-doar"
        }, e.createElement("img", {
            src: "data:image/png;base64,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",
            alt: "itau"
        })), e.createElement("p", null, " Agência: 0320 Resende "), e.createElement("p", null, "Número: 37153-7"), e.createElement("p", null, "CNPJ: 04.118.264/0001-03")), e.createElement("div", {
            class: "container-como-doar"
        }, e.createElement("div", {
            class: "imagem-como-doar"
        }, e.createElement("img", {
            src: "./assets/pix.8d85b9ff.png",
            alt: "pix"
        })), e.createElement("p", null, "CNPJ: 04.118.264/0001-03")))), e.createElement(m, null))
    }
}))), document.getElementById("root"));