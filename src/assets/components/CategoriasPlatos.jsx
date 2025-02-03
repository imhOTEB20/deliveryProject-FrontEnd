import stylePedidosPrincipal from '../css/pedidosPrincipal.module.css';

import imgPollo from '../img/pollo.png';
import imgComboPollo from '../img/pollo-frito.png';
import imgPizza from '../img/pizza.png';
import imgSandwiche from '../img/sandwich.png';
import imgPapasFritas from '../img/papas-fritas.png';
import imgHamburguesa from '../img/hamburguesa.png';
import imgHamburguesaPapas from '../img/hamburguesa-papas.png';
import imgHamburguesaCombo from '../img/hamburguesa-combo.png';
import imgEmpanadas from '../img/empanada.png';
import imgChoripan from '../img/choripan.png';
import imgPancho from '../img/hot-dog.png';
import imgBebidas from '../img/bebidas-sin-alcohol.png';

const Categoria = ({ img, titulo }) => {
    return (
        <div className={stylePedidosPrincipal.contenedorBotonCategoria}>
            <div className={stylePedidosPrincipal.contenedorBotonCategoria}>
                <button className={stylePedidosPrincipal.botonCategoria}>
                    <img className={stylePedidosPrincipal.logoCategoria} src={img} alt={titulo} />
                </button>
                <span className={stylePedidosPrincipal.subTituloCategoria}>{titulo}</span>
            </div>
        </div>
    )
}

const CategoriasPlatos = () => {
    return (
        <div className={stylePedidosPrincipal.contenedorCategorias}>
            <div className={stylePedidosPrincipal.tituloCategoria}>
                <span className={stylePedidosPrincipal.categoriaTitulo}>Categorias</span>
            </div>
            <div className={stylePedidosPrincipal.categorias}>
                <Categoria img={imgPollo} titulo="Pollo frito"/>
                <Categoria img={imgComboPollo} titulo="Combos Pollo"/>
                <Categoria img={imgPizza} titulo="Pizzas"/>
                <Categoria img={imgSandwiche} titulo="Sandwiches"/>
                <Categoria img={imgPapasFritas} titulo="Papas fritas"/>
                <Categoria img={imgHamburguesa} titulo="Hamburguesa"/>
                <Categoria img={imgHamburguesaPapas} titulo="Mini combo"/>
                <Categoria img={imgHamburguesaCombo} titulo="Gran combo"/>
                <Categoria img={imgEmpanadas} titulo="Empanadas"/>
                <Categoria img={imgChoripan} titulo="Choripan"/>
                <Categoria img={imgPancho} titulo="Pancho"/>
                <Categoria img={imgBebidas} titulo="Bebidas"/>
            </div>
        </div>
    )
}

export default CategoriasPlatos;
