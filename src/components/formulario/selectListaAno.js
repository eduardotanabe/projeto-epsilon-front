
export default (props) => {

    let anoAtual = new Date().getFullYear()
    let listaAnos = []
    listaAnos.push(<option value={""} key={0}>Informe o ano</option>)

    for (let ano = anoAtual; ano > anoAtual - 90; ano--) {
        listaAnos.push(<option value={ano} key={ano}>{ano}</option>)
    }



    return (
        <div className="form-group">
            <label className="form-label mt-4">{props.titulo}</label>
            <select className="form-select" 
                id="dropdown-ano-fabricacao" 
                onChange={e => props.anoClicado(e.target.value)
                }
                placeholder="Informe o ano">
                    {listaAnos}
            </select>
        </div>

    )
}