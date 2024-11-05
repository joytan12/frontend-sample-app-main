import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Inicio');
    };

    return (
        <div class="login-body">
            <div class="login-box">
                <h2>Iniciar Sesión</h2>
                <form class="login-form">
                    <label>Usuario</label>
                    <input class="login-elemento" type="text" placeholder="Usuario" />
                    <label>Contraseña</label>
                    <input class="login-elemento" type="password" placeholder="Contraseña" />
                    <button class="login-boton" onClick={handleClick}>Iniciar sesión</button>
                </form>
                <p>¿No tienes cuenta? <Link to="/Registro">Regístrate aquí</Link></p>
            </div>
        </div>
    );
}

export default LoginPage;