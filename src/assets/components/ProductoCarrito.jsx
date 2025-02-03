import Swal from 'sweetalert2';
import stylePedidosPrincipal from '../css/pedidosPrincipal.module.css';
import ModalAgregarAlCarrito from './ModalAgregarAlCarrito';
import ModalEditarCarrito from './ModalEditarCarrito';

const ProductoCarrito = ({nombre , descripcion, precio , cantidad, id}) => {
        const eliminarDelCarrito = (productoId) => {
            Swal.fire({
                title: "Eliminar producto",
                text: "¿Estás seguro de eliminar este producto del carrito?",
                icon: "warning",
                showCancelButton: true,
                background: "#eaeef4",
                confirmButtonColor: "#144d4d",
                confirmButtonText: "Sí, eliminar",
                cancelButtonColor: "#A60505",
                cancelButtonText: "Cancelar"
            }).then((result) => {
                if (result.isConfirmed) {
                    //
                }
            });
        };

    return (
        <div className={stylePedidosPrincipal.productoCarrito}>
            <div className={stylePedidosPrincipal.nombreEditar}>
                <span className={stylePedidosPrincipal.nombrePlatoCarrito}>{nombre}</span>
                <button className={"btn " + stylePedidosPrincipal.btnPersonalizado3 + " p-1"} aria-label="Editar Producto" data-bs-toggle="modal" data-bs-target={"#editarCarrito" + id}><i className="fa-solid fa-pen"></i> Editar</button>
                <ModalEditarCarrito nombre={nombre} descripcion={descripcion} precio={precio} cantidad={cantidad} id={id}/>
            </div>
            <div className={stylePedidosPrincipal.cantidadEliminar}>
                <span className={stylePedidosPrincipal.precioProducto}><span className={stylePedidosPrincipal.productoCantidad}>(x{cantidad}) </span>$ {precio}</span>
                <button className={"btn " + stylePedidosPrincipal.btnPersonalizado1 + " p-1"} onClick={eliminarDelCarrito}><i className="fa-solid fa-trash-can"></i></button>
            </div>
        </div>
    )
}

export default ProductoCarrito;
