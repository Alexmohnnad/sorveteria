
import React from "react";
import './style.css';

export default  function Rodape() {
    return(
        <footer>
            <div className=' limitar-secao container-logo-informacoes'>
                 <img src="assets/logo.png"title='logo empresa'alt="logo"/>
                 <div>
                    <h3>ENDEREÇO</h3>
                    <p>Rua c, 1524</p>
                    <p>Porto velho, RO 12345-678</p>
                 </div>
                 <div>
                    <h3>CONTATO</h3>
                    <p>info@meusite.com</p>
                    <p>TEL: (69) XXXX-XXXX</p>
                 </div>
                 <div>
                    <h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                 </div>
                 <div className='limitar-secao direito-autoral'>
                    <p>Gelateria. Orgulhosamente desenvolvido por Alexandro M. Silveira</p>
                 </div>
            </div>
        </footer>
    )
}
