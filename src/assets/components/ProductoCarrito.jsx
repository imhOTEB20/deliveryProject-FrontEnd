import stylePedidosPrincipal from '../css/pedidosPrincipal.module.css';

const ProductoCarrito = ({nombre , precio , cantidad}) => {
    return (
        <div className={stylePedidosPrincipal.productoCarrito}>
            <div className={stylePedidosPrincipal.nombreEditar}>
                <span className={stylePedidosPrincipal.nombrePlatoCarrito}>{nombre}</span>
                <button className={"btn " + stylePedidosPrincipal.btnPersonalizado3 + " p-1"} ><i className="fa-solid fa-pen"></i> Editar</button>
            </div>
            <div className={stylePedidosPrincipal.cantidadEliminar}>
                <span className={stylePedidosPrincipal.precioProducto}><span className={stylePedidosPrincipal.productoCantidad}>(x{cantidad}) </span>$ {precio}</span>
                <button className={"btn " + stylePedidosPrincipal.btnPersonalizado1 + " p-1"}><i className="fa-solid fa-trash-can"></i></button>
            </div>
        </div>
    )
}

export default ProductoCarrito;
