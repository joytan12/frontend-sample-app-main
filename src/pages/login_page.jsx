import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Inicio');
    };

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <form>
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />
                <button onClick={handleClick}>Iniciar sesión</button>
            </form>
            <p>¿No tienes cuenta? <Link to="/Registro">Regístrate aquí</Link></p>
        </div>
    );
}

export default LoginPage;