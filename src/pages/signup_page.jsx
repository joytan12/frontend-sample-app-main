import React from 'react';
import { Link } from 'react-router-dom';

function SignupPage() {
    return (
        <div>
            <h2>Signup</h2>
            <form>
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />
                <input type="password" placeholder="Confirmar contraseña" />
                <button type="submit">Registrarse</button>
            </form>
            <p>¿Ya tienes cuenta? <Link to="/">Inicia sesión aquí</Link></p>
        </div>
    );
}

export default SignupPage;