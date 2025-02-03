import style from '../css/style.module.css';

const ModalVerMas = () => {
    return (
        <section className="modal fade" id="verMas" tabIndex="-1" aria-labelledby="verMas" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className={"modal-header "+style.bgColorSecundario}>
                                <h5 className="modal-title text-white" id="verMas">Información</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className={"modal-body "+style.bgColorFondo}>
                        <form id="form-editar-carrito">
                            <div className="mb-1 d-flex align-items-center justify-content-center flex-column w-100">
                                <div className="d-flex align-items-center justify-content-between w-100">
                                    <span className="fs-5 fw-bold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem est voluptas placeat natus, earum sed eligendi labore nisi iusto ipsa qui quibusdam quas sapiente pariatur accusantium error porro esse fugiat!</span>
                                    <span className="fs-5 fw-semibold"></span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between w-100 py-2">
                                    <p className="fs-6 m-0 p-0 text-start"></p>
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

export default ModalVerMas;
