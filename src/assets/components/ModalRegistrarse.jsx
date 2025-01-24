import style from '../css/style.module.css';

const ModalRegistrarse = () => {
    return (
        <section className="modal fade" id="registrarseModal" tabIndex="-1" aria-labelledby="registrarseModal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className={"modal-header "+style.bgColorSecundario}>
                        <h5 className="modal-title text-white" id="registrarseModal">Registarse</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className={"modal-body "+style.bgColorFondo}>
                        <form id="form-registro">
                            <div className="mb-3">
                                <label htmlFor="emailRegistro" className="form-label fw-bolder">Email</label>
                                <input type="email" className={"form-control "+style.bgInput} id="emailRegistro" aria-describedby="emailHelp" placeholder="Ingrese su email"
                                minLength="8" maxLength="20" required/>
                                <div id="emailErrorRegistro" className="form-text">
                                    Email no valido.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nombreApellidoRegistro" className="form-label fw-bolder">Nombre y Apellido</label>
                                <input type="text" className={"form-control "+style.bgInput} id="nombreApellidoRegistro" placeholder="Ingrese su nombre y apellido"
                                minLength="3" maxLength="25" required/>
                                <div id="nombreApellidoErrorRegistro" className="form-text">
                                    Nombre y Apellido no valido.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="telefonoRegistro" className="form-label fw-bolder">Teléfono</label>
                                <input type="tel" className={"form-control "+style.bgInput} id="telefonoRegistro" placeholder="Ingresa tu teléfono" maxLength="10" pattern="\d{10}" required/>
                                <div id="telefonoErrorRegistro" className="form-text">
                                    Teléfono no valido.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="fechaNacimientoRegistro" className="form-label fw-bolder">Fecha de Nacimiento</label>
                                <input type="date" className={"form-control "+style.bgInput} id="fechaNacimientoRegistro" placeholder="Ingrese su Fecha de Nacimiento" min="1900-01-01" max="2004-12-31" required/>
                                <div id="fechaNacimientoErrorRegistro" className="form-text">
                                    Fecha de nacimiento no valida.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passwordRegistro" className="form-label fw-bolder">Contraseña</label>
                                <input type="password" className={"form-control "+style.bgInput} id="passwordRegistro"
                                placeholder="Ingrese su contraseña" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Debe contener al menos un número , una letra mayúscula una minúscula, y al menos 8 caracteres"
                                maxLength="20" minLength="8" required/>
                                <div id="passwordErrorRegistro" className="form-text">
                                    Debe contener al menos un número , una letra mayúscula una minúscula, y al menos 8 caracteres.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passwordRegistroRepetir" className="form-label fw-bolder">Repetir contraseña</label>
                                <input type="password" className={"form-control "+style.bgInput} id="passwordRegistroRepetir"
                                placeholder="Repita su contraseña" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Debe contener al menos un número , una letra mayúscula una minúscula, y al menos 8 caracteres"
                                maxLength="20" minLength="8" required/>
                                <div id="passwordRepetirErrorRegistro" className="form-text">
                                    Debe contener al menos un número , una letra mayúscula una minúscula, y al menos 8 caracteres.
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <button type="submit" id="botonRegistrarse" className={"btn mx-1 fw-bold "+style.btnPersonalizado3} aria-label="Registrarse">Registrarse</button>
                                <button type="reset" className={"btn mx-1 fw-bold "+style.btnPersonalizado1} aria-label="Cancelar">Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ModalRegistrarse;
