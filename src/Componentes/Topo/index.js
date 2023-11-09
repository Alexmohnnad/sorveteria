import React from "react";
import { Link } from 'react-router-dom';
import './style.css';
export default function Topo(){
    return(
        <header>
            <section className="limitar-secao">
                <div>
                    <img src="assets/logo.png"title='logo empresa'alt="logo"/>
                    <nav>
                        <Link className="link-topo"to='/'>Home</Link>
                        <Link className="link-topo"to='/Sabores'>Sabores</Link>
                        <Link className="link-topo"to='/Sobre'>Sobre</Link>         
                    </nav>
                </div>
            </section>
        </header>
    );
}
