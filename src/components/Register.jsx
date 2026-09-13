import { useState } from 'react';

function Register() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [okPass, setOkPass] = useState("");
    const [errorPass, setErrorPass] = useState("");
    const [errorOkPass, setErrorOkPass] = useState("");

    const validarCampos = (d) => {
        d.preventDefault();
        if (!email.trim() || !pass.trim() || !okPass.trim()) {
            alert("Por favor, completa todos los campos.");
        } else if (errorPass || errorOkPass) {
            alert("Por favor, corrige los errores antes de continuar.");
        } else {
            alert("¡Ya puedes pedir tu pizza!");
            setEmail("");
            setPass("");
            setOkPass("");
            setErrorPass("");
            setErrorOkPass("");
        }
    };

    const validarPass = (p)=>{
        const {name, value} = p.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPass(value);
            if (value.length > 0 && value.length < 6) {
                setErrorPass("La contraseña debe tener al menos 6 caracteres.");
            } else {
                setErrorPass("");
            }
            if (okPass !== "" && value !== okPass) {
                setErrorOkPass("Las contraseñas no son iguales.");
            } else {
                setErrorOkPass("");
            }
        } else if (name === "okPassword") {
            setOkPass(value);
            if (value !== "" && value !== pass) {
                setErrorOkPass("Las contraseñas no son iguales.");
            } else {
                setErrorOkPass("");
            }
        };
    };

  return (
    <section className='reg-page'>
    <h3>Tu próxima pizza comienza aquí</h3>
    <form action="" id='registro' onSubmit={validarCampos}>
        <div className='inputs'>
            <div className='input-reg'>
                <label>Email</label>
                <input 
                    type="email" 
                    placeholder='tu@email.com' 
                    name="email" 
                    id="correo" 
                    /*required*/
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
                    /*required */
                    onChange={validarPass}
                    value={pass}
                />
                {errorPass && <p className='error-text'>{errorPass}</p>}  
            </div>
            <div className='input-reg'>
                <label>Confirma tu contraseña</label>
                <input 
                    type="password" 
                    placeholder='Confirma tu contraseña' 
                    name="okPassword" 
                    id="passcom" 
                    /*required*/
                    onChange={validarPass}
                    value={okPass}
                />
                {errorOkPass && <p className='error-text'>{errorOkPass}</p>}
            </div>
        </div>
        <button type='submit' className='btn-reg'>Registrarme</button>
    </form>
    </section>
  )
};

export default Register;