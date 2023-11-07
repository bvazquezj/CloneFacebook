import './formulario.css'
export function Formulario() {
    return(
        <div className='contain-form'>
            <div className='contain-sub'>
                <div className='form'>
                    <form action="">
                        <div className='input'>
                            <input type="text" placeholder="Correo electrónico o número de teléfono"/>
                        </div>
                        <div className='input'>
                             <div className='input-pass'>
                                <input id='pass' type="password" placeholder="Contraseña" />
                            </div>
                        </div>
                        <button>Iniciar sesion</button>
                        <a href="">¿Olvidaste tu contraseña?</a>
                        <div className='line'></div>
                        <div className='new-acount'>
                            <button>Crear cuenta nueva</button>
                        </div>
                    </form>
                </div>
                <div className='pagina'>
                    <a href="">Crea una página</a>
                    <p> para una celebridad, una marca o un negocio.</p>
                </div>
            </div>
        </div>
    )
}