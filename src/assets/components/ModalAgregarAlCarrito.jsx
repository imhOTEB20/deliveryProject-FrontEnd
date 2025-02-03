import style from '../css/style.module.css';

const ModalAgregarAlCarrito = ({nombre, descripcion, precio, id}) => {
    return (
        <section className="modal fade" id={"agregarAlCarrito" + id} tabIndex="-1" aria-labelledby={"agregarAlCarrito" + id} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className={"modal-header "+style.bgColorSecundario}>
                        <h5 className="modal-title text-white" id={"agregarAlCarrito" + id}>Editar carrito</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className={"modal-body "+style.bgColorFondo}>
                        <form id="form-iniciar-sesion">
                            <div className="mb-1 d-flex align-items-center justify-content-center flex-column w-100">
                                <div className="d-flex align-items-center justify-content-between w-100">
                                    <span className="fs-5 fw-bold">{nombre}</span>
                                    <span className="fs-5 fw-semibold">$ {precio}</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between w-100 py-2">
                                    {descripcion ? (
                                        <p className="fs-6 m-0 p-0 text-start">{descripcion}</p>
                                    ) : (
                                        <p className="fs-6 m-0 p-0 text-center">Sin descripción</p>
                                    )}
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor={"cantidad"+id} className="form-label fw-bolder">Cantidad</label>
                                <input type="number" className={"form-control " + style.bgInput} id={"cantidad" + id} placeholder="Ingrese la cantidad..." min="1"  max="254" name={nombre} required/>
                                <div id="cantidadError">
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor={"comentarios"+id} className="form-label fw-bolder">Comentarios</label>
                                <textarea className={"form-control " + style.bgInput} id={"comentarios"+id} rows="3"></textarea>
                                <div id="comentariosError">
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <button type="submit" className={"btn mx-1 fw-bold "+style.btnPersonalizado3} aria-label="Ingresar">Agregar</button>
                                <button type="button" className={"btn mx-1 fw-bold "+style.btnPersonalizado1} data-bs-dismiss="modal" aria-label="Close">Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ModalAgregarAlCarrito;
