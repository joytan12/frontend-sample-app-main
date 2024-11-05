import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
    return (
        <div>
            <h2>Login</h2>
            <form>
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />
                <button type="submit">Iniciar sesión</button>
            </form>
            <p>¿No tienes cuenta? <Link to="/Registro">Regístrate aquí</Link></p>
        </div>
    );
}

export default LoginPage;