import stylePedidosPrincipal from '../css/pedidosPrincipal.module.css';

const BuscarPedido = () => {
    return (
        <div className={stylePedidosPrincipal.contenedorBuscar}>
            <input className={stylePedidosPrincipal.inputBuscar} type="text" placeholder="Buscar..."/>
            <button className={stylePedidosPrincipal.botonBuscar}><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
    )
}

export default BuscarPedido;
