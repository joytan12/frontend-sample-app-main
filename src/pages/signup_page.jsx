import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignupPage() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };
    return (
        <div class="signup-body">
            <div class="signup-box">
                <h2>Registrarse</h2>
                <form class="signup-form">
                    <label>Usuario</label>
                    <input class="signup-elemento" type="text" placeholder="Usuario" />
                    <label>Contraseña</label>
                    <input class="signup-elemento" type="password" placeholder="Contraseña" />
                    <label>Confirmar Contraseña</label>
                    <input class="signup-elemento" type="password" placeholder="Confirmar contraseña" />
                    <button class="signup-boton" onClick={handleClick}>Registrarse</button>
                </form>
                <p>¿Ya tienes cuenta? <Link to="/">Inicia sesión aquí</Link></p>
            </div>
        </div>
    );
}

export default SignupPage;