export default (props) => {
    let opcoes = props.itens
    
    function criandoOpcoes() {
        let itens = []
        for (let [key, value] of opcoes) {
            itens.push(<option value={key}>{value}</option>)
        }
        return itens
    }
    
    return (
        <div className="form-group">
            <label>{props.name}</label>
            <select className="form-select" id={`${props.name}-dropdown`}>
                {criandoOpcoes}
            </select>
        </div>
    )
}