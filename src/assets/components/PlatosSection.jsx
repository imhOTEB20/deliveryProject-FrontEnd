import stylePedidosPrincipal from '../css/pedidosPrincipal.module.css';
import ModalAgregarAlCarrito from './ModalAgregarAlCarrito';

const Plato = ({nombre , descripcion, precio, id}) => {
    return (
        <>
        <button className={stylePedidosPrincipal.plato} aria-label="Agregar al Carrito" data-bs-toggle="modal" data-bs-target={"#agregarAlCarrito" + id}>
            <h6 className={stylePedidosPrincipal.tituloPlato}>{nombre}</h6>
            {descripcion ? (
                <p className={stylePedidosPrincipal.descripcionPlato}>{descripcion}</p>
            ) : (
                <p className={stylePedidosPrincipal.descripcionPlato}>Sin descripción</p>
            )}
            <span className={stylePedidosPrincipal.precioPlato}>$ {precio}</span>
        </button>
        <ModalAgregarAlCarrito nombre={nombre} descripcion={descripcion} precio={precio} id={id}/>
        </>
    )
}

const Section = ({nombreSection}) => {
    return (
        <div className={stylePedidosPrincipal.categoriaPlato}>
            <h5 className={stylePedidosPrincipal.tituloPlatos}>{nombreSection}</h5>
            <div className={stylePedidosPrincipal.platos}>
                <Plato nombre="Nuggest de pollo" descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum" precio="5000,00" id={1}/>
                <Plato nombre="Nuggest de pollo" descripcion="" precio="4000,00" id={2}/>
                <Plato nombre="Nuggest de pollo" descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum" precio="5000,00" id={3}/>
                <Plato nombre="Nuggest de pollo" descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum" precio="5000,00" id={4}/>
                <Plato nombre="Nuggest de pollo" descripcion="" precio="4000,00" id={5}/>
                <Plato nombre="Nuggest de pollo" descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum" precio="5000,00" id={6}/>
                <Plato nombre="Nuggest de pollo" descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum" precio="5000,00" id={7}/>
                <Plato nombre="Nuggest de pollo" descripcion="" precio="4000,00" id={8}/>
                <Plato nombre="Nuggest de pollo" descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum" precio="5000,00" id={9}/>
                <Plato nombre="Nuggest de pollo" descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum" precio="5000,00" id={10}/>
                <Plato nombre="Nuggest de pollo" descripcion="" precio="4000,00" id={11}/>
                <Plato nombre="Nuggest de pollo" descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum" precio="5000,00"/>
                <Plato nombre="Nuggest de pollo" descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum" precio="5000,00" id={12}/>
                <Plato nombre="Nuggest de pollo" descripcion="" precio="4000,00" id={13}/>
                <Plato nombre="Nuggest de pollo" descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum" precio="5000,00" id={14}/>
                <Plato nombre="Nuggest de pollo" descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum" precio="5000,00" id={15}/>
                <Plato nombre="Nuggest de pollo" descripcion="" precio="4000,00" id={16}/>
                <Plato nombre="Nuggest de pollo" descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum" precio="5000,00" id={17}/>
                <Plato nombre="Nuggest de pollo" descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum" precio="5000,00" id={18}/>
                <Plato nombre="Nuggest de pollo" descripcion="" precio="4000,00" id={19}/>
                <Plato nombre="Nuggest de pollo" descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum" precio="5000,00" id={19}/>
            </div>
        </div>
    )
}

const PlatosSectiones = () => {
    return (
        <div className={stylePedidosPrincipal.contenedorDePlatos}>
            <Section nombreSection="Pollo Frito"/>
        </div>
    )
}

export default PlatosSectiones;
