import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
//import Button from '../components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu" >
            <a href="/">
                <img className="Logo" src={Logo} alt='Home Nathyflix' />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>

    );
}

export default Menu;