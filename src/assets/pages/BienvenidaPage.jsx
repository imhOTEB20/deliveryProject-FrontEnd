import Banner from "../components/Banner";
import ModalLogin from "../components/ModalLogin";
import ModalRegistrarse from "../components/ModalRegistrarse";
import NavBarBienvenida from "../components/NavBarBienvenida";

function BienvenidaPage() {
    return (
        <>
            <NavBarBienvenida/>
            <Banner/>
            <ModalLogin/>
            <ModalRegistrarse/>
        </>
    )
}

export default BienvenidaPage

