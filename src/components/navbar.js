import NavbarItem from "./navbar-item";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
            <div className="container">
                <a className="navbar-brand" href="/">Epsilon</a>
                <button className="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarColor01" 
                        aria-controls="navbarColor01" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <NavbarItem href="/" label="Home" />
                        <NavbarItem href="/cadastrar-veiculo" label="Cadastrar veículo" />
                        <NavbarItem href="/pesquisar" label="Pesquisar veíuculos" />
                        <NavbarItem href="/resultado-pesquisa" label="Resultado da Pesquisa" />
                        <NavbarItem href="/fotos" label="Fotos" />
                        <NavbarItem href="/sobre" label="Sobre" />
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;