import React from "react";
import Topo from "../../Componentes/Topo";
import Rodape from "../../Componentes/Rodape";
import './style.css';

export default function Sabores (){
    return(
        <div>
            <Topo />
                <main>
                    <section className="secao-banner-sabores">
                            <div className="titulo-banner-sabores">
                                <h1>NOSSOS SABORES</h1>
                            </div>
                    </section>
                    <section className="limitar-secao secao-sabores">
                        <h2>SABORES DE SORVETE</h2>
                        <div className="container-sorvetes">
                            <div className="box-sorvete">
                                <img src="./assets/sabor-oreo.png"title="Oreo"alt="Sabor Oreo"/>
                                <h2>Sorvete de Oreo</h2>
                                <p>Delicioso sorvete sabor Oreo.
                                    Uma explosão de sabor.
                                </p>
                            </div>
                            <div className="box-sorvete">
                                <img src="./assets/sabor-pistache.png"title="Pistache"alt="Sabor Pistache"/>
                                <h2>Sorvete de Pistache</h2>
                                <p>Cremoso sorvete sabor pistache com pedacinhos de semente</p>
                            </div>
                            <div className="box-sorvete">
                                <img src="./assets/sabor-cookies-avela.png"title="Avelã"alt="Sabor Avelã"/>
                                <h2>Sorvete de Cookeis & Avelã</h2>
                                <p>O nosso melhor sorvete. Você vai adora o sabor</p>
                            </div>
                            <div className="box-sorvete">
                                <img src="./assets/sorbet-kiwi.png"title="kiwi"alt="Sabor kiwi"/>
                                <h2>Sorvete de kiwi</h2>
                                <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C</p>
                            </div>
                            <div className="box-sorvete">
                                <img src="./assets/sorbet-morango.png"title="Morango"alt="Sabor Morango"/>
                                <h2>Sorvete de Morango</h2>
                                <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                            </div>
                            <div className="box-sorvete">
                                <img src="./assets/sorbet-limao.png"title="limao Siciliano"alt="Sabor Limao Siciliano"/>
                                <h2>Sorvete de Limao Siciliano</h2>
                                <p>O incrivel sorvete gourmet de limão siciliano vai te encantar</p>
                            </div>
                        </div>
                    </section>
                </main>
            <Rodape />
        </div>
    )

}
