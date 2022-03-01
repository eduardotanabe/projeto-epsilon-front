import React from "react"
import { useLocation, useParams } from "react-router-dom"
import { Table } from "../../components/table/table"

import VeiculoService from "../../service/veiculo-service"

export default (props) => {

    const location = useLocation()

    const [req, setReq] = React.useState(location.state)
    const [dados, setDados] = React.useState([])

    React.useEffect(() => {
        console.log(req)
        console.log(req.placaLicenca)
        if (req.marca && req.modelo && req.anoModelo) {
            VeiculoService.consultarPorMarcaModeloAno(req.marca.id, req.modelo, req.anoModelo)
                .then(result => {
                    setDados(result.data)
                })
        } else if (req.marca && req.anoModelo) {
            VeiculoService.consultarPorMarcaAno(req.marca.id, req.anoModelo)
                .then(result => {
                    setDados(result.data)
                })
        } else if (req.marca && req.modelo) {
            VeiculoService.consultarPorMarcaModelo(req.marca.id, req.modelo)
                .then(result => {
                    setDados(result.data)
                })
        } else if (req.placaLicenca) {
            VeiculoService.consultarPorPlaca(req.placaLicenca)
                .then(result => {
                    setDados(result.data)
                })
        } else if (req.marca) {
            VeiculoService.consultarPorMarca(req.marca.id)
                .then(result => {
                    setDados(result.data)
                })
        } 
    }, [])

    return (
        <div>
            {Array.isArray(dados) && dados.length ? <Table data={dados} /> : <p>Sem resultado</p>}
        </div>
    )
}