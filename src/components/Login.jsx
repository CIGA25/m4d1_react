import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [errorPass, setErrorPass] = useState("");

    const validarCampos = (d) => {
        d.preventDefault();
        if (!email.trim() || !pass.trim()) {
            alert("Por favor, completa todos los campos.");
        } else if (errorPass) {
            alert("Por favor, corrige los errores antes de continuar.");
        } else {
            alert("¡Ya puedes pedir tu pizza!");
            setEmail("");
            setPass("");
            setErrorPass("");
        }
    };

    const validarPass = (p) => {
        const { name, value } = p.target;
        
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPass(value);
            if (value.length > 0 && value.length < 6) {
                setErrorPass("La contraseña debe tener al menos 6 caracteres.");
            } else {
                setErrorPass("");
            }
        }
    };

  return (
    <section className='reg-page'>
    <h3>Vuelve por tu pizza favorita</h3>
    <form id='registro' onSubmit={validarCampos}>
        <div className='inputs'>
            <div className='input-reg'>
                <label>Email</label>
                <input 
                    type="email" 
                    placeholder='tu@email.com' 
                    name="email" 
                    id="correo" 
                    onChange={validarPass}
                    value={email}
                />
            </div>
            <div className='input-reg'>
                <label>Contraseña</label>
                <input 
                    type="password" 
                    placeholder='Ingresa tu contraseña' 
                    name="password" 
                    id="pass" 
                    onChange={validarPass}
                    value={pass}
                />
                {errorPass && <p className='error-text'>{errorPass}</p>}  
            </div>
        </div>
        <button type='submit' className='btn-reg'>Iniciar sesión</button>
    </form>
    </section>
  )
};

export default Login;