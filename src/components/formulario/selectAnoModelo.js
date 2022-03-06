export default (props) => {

    function listaAnosModelo() {
        let anoFabricacao = Number(props.anoFabricacao)
        let listaAnos = []

        if(anoFabricacao) {
            listaAnos.push(<option value={anoFabricacao} key={anoFabricacao}>{anoFabricacao}</option>)
            listaAnos.push(<option value={anoFabricacao + 1} key={anoFabricacao + 1}>{anoFabricacao + 1}</option>)
            return listaAnos
        } else{
            return (
                <option id="disabledOption" value={""} disabled selected>Desabilitado</option>
            )
        }
    }

    return (
        <div className="form-group">
            <label className="form-label mt-4">Ano modelo</label>
            <select className="form-select" 
                id="dropdown-ano-modelo" 
                onChange={e => props.anoModeloClicado(e.target.value)}
                disabled={props.anoFabricacao ? false : true}
                >
                    {listaAnosModelo()}
            </select>
        </div>

    )
}