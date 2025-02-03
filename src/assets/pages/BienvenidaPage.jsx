import Banner from "../components/Banner";
import CardBienvenida from "../components/CardBienvenida";
import FooterBienvenida from "../components/FooterBienvenida";
import ModalLogin from "../components/ModalLogin";
import ModalRegistrarse from "../components/ModalRegistrarse";
import NavBarBienvenida from "../components/NavBarBienvenida";
import NosotrosBienvenida from "../components/NosotrosBienvenida";
import NuestroMenu from "../components/NuestroMenu";

function BienvenidaPage() {
    return (
        <>
            <NavBarBienvenida/>
            <Banner/>
            <CardBienvenida/>
            <NosotrosBienvenida/>
            <NuestroMenu/>
            <FooterBienvenida/>
            <ModalLogin/>
            <ModalRegistrarse/>
        </>
    )
}

export default BienvenidaPage

