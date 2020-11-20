import React from 'react';

import './Nav.css';


class Nav extends React.Component {

    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><a href={"#"}>Home</a></li>
                        <li><a href={"#"}>Localizações</a></li>
                        <li><a href={"#"}>Catalogo</a></li>
                        <li><a href={"#"}>Contato</a></li>
                        <li><a href={"#"}>Sobre</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav;