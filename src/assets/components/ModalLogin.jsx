import style from '../css/style.module.css';

const ModalLogin = () => {
    return (
        <section className="modal fade" id="iniciarSesionModal" tabIndex="-1" aria-labelledby="iniciarSesionModal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className={"modal-header "+style.bgColorSecundario}>
                        <h5 className="modal-title text-white" id="iniciarSesionModal">Iniciar Sesión</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className={"modal-body "+style.bgColorFondo}>
                        <form id="form-iniciar-sesion">
                            <div className="mb-3">
                                <label htmlFor="email-iniciar-sesion" className="form-label fw-bolder">Email</label>
                                <input type="email" className={"form-control "+style.bgInput} id="email-iniciar-sesion" aria-describedby="emailHelp" placeholder="Ingrese su email"
                                    minLength="5" maxLength="254" name="Email" required
                                    pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"/>
                                <div id="emailErrorIniciarSesion">
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password-iniciar-sesion" className="form-label fw-bolder">Contraseña</label>
                                <input type="password" className={"form-control "+style.bgInput}  id="password-iniciar-sesion"
                                    placeholder="Ingrese su contraseña"
                                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[^\W_]{6,16}$"
                                    title="Debe contener al menos un número, una letra mayúscula, una letra minúscula, y tener entre 6 y 16 caracteres"
                                    maxLength="16" minLength="6" name="Contraseña" required/>
                                <div id="passwordErrorIniciarSesion"></div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <button type="submit" className={"btn mx-1 fw-bold "+style.btnPersonalizado3} aria-label="Ingresar">Ingresar</button>
                                <button type="reset" className={"btn mx-1 fw-bold "+style.btnPersonalizado1} aria-label="Cancelar">Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ModalLogin
