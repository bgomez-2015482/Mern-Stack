import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    //1 State para iniciar sesión

    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    //2 Extraer usuario

    const {email, password} = usuario;

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


    //pasarlo al action

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>

                <form
                    //subir datos
                    onSubmit={onSubmit}
                >
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
                        <label htmlFor="password">Password</label>
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
                        <input type="submit" className="btn btn-primario btn-block"
                        value="Iniciar Sesión" />
                    </div>

                </form>

                <Link to={'/new-account'} className="enlace-cuenta">
                Crear una cuenta
                </Link>
            </div>
        </div>
    );
}
 
export default Login;