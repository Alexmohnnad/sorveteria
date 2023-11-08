import React from "react";
import { Link } from 'react-router-dom';
export default function Topo(){
    return(
        <header>
            <section>
                <div>
                    <img src="assets/logo.png"title='logo empresa'alt="logo"/>
                    <nav>
                        <Link to='/'>Home</Link>
                        <Link to='/Sabores'>Sabores</Link>
                        <Link to='/Sobre'>Sobre</Link>         
                    </nav>
                </div>
            </section>
        </header>
    );
}
