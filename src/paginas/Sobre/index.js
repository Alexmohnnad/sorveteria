import React from "react";
import Topo from "../../Componentes/Topo";
import Rodape from "../../Componentes/Rodape";
import './style.css';

export default function Sobre (){
    return(
        <div>
            <Topo />
                <main className="seção-main">
                    <section className="secao-banner-sobre">
                        <div className="titulo-banner-sobre">
                            <h1>A GELATERIA</h1>
                        </div>
                    </section>
                    <section className="container-secao-sobre-nos">
                        <div>
                            <h1>Sobre Nós</h1>
                            <span>Nós simplesmente amamos sorvete!</span>                           
                            <img src="./assets/logo.png" title="logo"alt="logo"/> 
                            <p>
                                Somos uma empresa apaixonada pelo que faz. Colocamos amor em cadas sorvete produzido.
                                Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos
                                operando desde 2009 com as melhores matérias-primas para a produção final do sorvete.Vendemos
                                tanto para varejo como para aracado.
                            </p>
                            <p>
                                Nossos clientes podem comprar os nossos sorvetes e degistar na nossa loja ou levar para sua 
                                residência e aproveitar junto com a familia. também vendemos para estabelecimentos e criamos eventos
                                como festa de aniversário, formaturase eventos empresariais. Para contratar oso nossos serviços, basta entrar 
                                em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer
                                sua festa mais saborosa, com o melhor sorvete da cidade.
                            </p>
                        </div>   
                    </section>
                    <section className="container-secao-imagens">
                        <div>
                            <img src="./assets/sobre-image.jpg"title="Sobre"alt="Sobre"/>
                            <img src="./assets/sorveteria.jpg"title="sorveteria"alt="sorveteria"/>                           
                        </div>
                    </section>
                </main>
            <Rodape />
        </div>
    )

}
