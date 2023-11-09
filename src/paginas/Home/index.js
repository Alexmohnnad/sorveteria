import React from "react";
import Topo from "../../Componentes/Topo";
import Rodape from "../../Componentes/Rodape";
import './style.css';

export default function Home(){
    return(
        <div>
         <Topo />
            <section>
                <div className="secao-banner">
                    <div className="texto-banner">
                        <h1>SORVETE ARTESANAL</h1>
                    </div>
                </div>
                <div className="secao-nossos-sabores">                    
                    <img src="./assets/banner-sabores.jpg"title='banner-sabores'alt="banner sabores"/>                   
                    <div className="texto-secao-nossos-sabores">
                        <h2>NOSSOS SABORES</h2>
                        <h3>Novos e deliciosos!!!</h3>
                        <p>Sorvete bom é aquele feito com os melhores ingredientes! 
                            Aqui na gelateria todos os nossos produtos são naturais, à
                            base de frutas e sem nenhum conservante! Também temos 
                            opções sem lactose e sem açucar. Venha conhecer e,
                            perceber que tem como o sorvete ser delicioso e saudavél ao
                            mesmo tempo!
                        </p>
                    </div>                    
                </div>
                <div className="secao-nossos-eventos">
                    <div className="texto-secao-nossos-eventos">
                        <h2>NOSSOS EVENTOS</h2>
                        <h3>Delicias com sorvete!!!</h3>
                        <p>Mais que uma sorveteria, uma extensão da sua casa! 
                            estamos aqui prontinhos para te atender e oferecer os
                            os melhores eventos com os melhores sorvetes de sua vida!
                            venha nos conhecer e passar um tempo aqui com a gente.
                        </p>
                    </div>                       
                        <img src="./assets/eventos-image.jpg"title='Eventos'alt="Imagem eventos"/>                                            
                </div>
                <div className="secao-sobre-nos">                    
                   <img src="./assets/sobre-image.jpg"title='Imagem-sobre'alt="Imagem sobre"/>    
                    <div className="texto-secao-sobre-nos">
                        <h2>SOBRE NÓS!!!</h2>
                        <h3>Alegria em cada casquinha!!!</h3>
                        <p>Venha tomar o melhor sorvete da região aqui com a gente! 
                            Nós estamos há anos no mercado produzindo o que tem de
                            melhor para o nosso cliente e você não pode ficar de fora dessa. 
                            Venha nos fazer uma visiata e aproveite o melhor atendimento
                            e o melhor sorvete da cidade.                          
                        </p>
                    </div>                    
                </div>
            </section>
         <Rodape />
        </div>
    )
}

