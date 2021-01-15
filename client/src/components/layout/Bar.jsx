import React from 'react';

const Bar = () => {
    return (
        <header className="app-header">
            <p className="nombre-usuario">Hola <span>Bryan</span></p>
            
            <nav className="nav-principal">
                <a href="#!">Cerrar sesión</a>
            </nav>
        </header>
    );
}
 
export default Bar;