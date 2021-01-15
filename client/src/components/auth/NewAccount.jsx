import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewAccount = () => {

    //1 State para iniciar sesión

    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    //2 Extraer usuario

    const {nombre, email, password, confirmar} = usuario;

    const onChangeLogin = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    //cuando el usuario quiere iniciar sesión

    const onSubmit = e => {
        e.preventDefault();
    }

    //validar que no haya campos vacios

    //Password minimo de 6 caracteres

    //Los 2 password sean iguales

    //pasarlo al action

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crear nueva cuenta</h1>

                <form
                    //subir datos
                    onSubmit={onSubmit}
                >

                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Tu nombre"
                        value={nombre}
                        onChange={onChangeLogin}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Tu Email"
                        value={email}
                        onChange={onChangeLogin}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Tu contraseña"
                        value={password}
                        onChange={onChangeLogin}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar contraseña</label>
                        <input
                        type="password"
                        id="confirmar"
                        name="confirmar"
                        placeholder="Repite tu contraseña"
                        value={confirmar}
                        onChange={onChangeLogin}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                        value="Registrar mi cuenta" />
                    </div>

                </form>

                <Link to={'/'} className="enlace-cuenta">
                Iniciar sesión
                </Link>
            </div>
        </div>
    );
}
 
export default NewAccount;