import stylePedidosPrincipal from '../css/pedidosPrincipal.module.css';

const Plato = ({nombre , descripcion, precio}) => {
    return (
        <button className={stylePedidosPrincipal.plato}>
            <h6 className={stylePedidosPrincipal.tituloPlato}>{nombre}</h6>
            <p className={stylePedidosPrincipal.descripcionPlato}>{descripcion}</p>
            <span className={stylePedidosPrincipal.precioPlato}>$ {precio}</span>
        </button>
    )
}

const Section = ({nombreSection}) => {
    return (
        <div className={stylePedidosPrincipal.categoriaPlato}>
            <h5 className={stylePedidosPrincipal.tituloPlatos}>{nombreSection}</h5>
            <div className={stylePedidosPrincipal.platos}>
                <Plato nombre="Nuggest de pollo" descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum" precio="5000,00"/>
                <Plato nombre="Nuggest de pollo" descripcion="" precio="4000,00"/>
                <Plato nombre="Nuggest de pollo" descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum" precio="5000,00"/>
                <Plato nombre="Nuggest de pollo" descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum" precio="5000,00"/>
                <Plato nombre="Nuggest de pollo" descripcion="" precio="4000,00"/>
                <Plato nombre="Nuggest de pollo" descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum" precio="5000,00"/>
                <Plato nombre="Nuggest de pollo" descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum" precio="5000,00"/>
                <Plato nombre="Nuggest de pollo" descripcion="" precio="4000,00"/>
                <Plato nombre="Nuggest de pollo" descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum" precio="5000,00"/>
                <Plato nombre="Nuggest de pollo" descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum" precio="5000,00"/>
                <Plato nombre="Nuggest de pollo" descripcion="" precio="4000,00"/>
                <Plato nombre="Nuggest de pollo" descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum" precio="5000,00"/>
                <Plato nombre="Nuggest de pollo" descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum" precio="5000,00"/>
                <Plato nombre="Nuggest de pollo" descripcion="" precio="4000,00"/>
                <Plato nombre="Nuggest de pollo" descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum" precio="5000,00"/>
                <Plato nombre="Nuggest de pollo" descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum" precio="5000,00"/>
                <Plato nombre="Nuggest de pollo" descripcion="" precio="4000,00"/>
                <Plato nombre="Nuggest de pollo" descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum" precio="5000,00"/>
                <Plato nombre="Nuggest de pollo" descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum" precio="5000,00"/>
                <Plato nombre="Nuggest de pollo" descripcion="" precio="4000,00"/>
                <Plato nombre="Nuggest de pollo" descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum. Molestiae cumque, blanditiis deserunt nihil suscipit vero illum" precio="5000,00"/>
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
