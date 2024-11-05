import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignupPage() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };
    return (
        <div>
            <h2>Registrarse</h2>
            <form>
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />
                <input type="password" placeholder="Confirmar contraseña" />
                <button onClick={handleClick}>Registrarse</button>
            </form>
            <p>¿Ya tienes cuenta? <Link to="/">Inicia sesión aquí</Link></p>
        </div>
    );
}

export default SignupPage;