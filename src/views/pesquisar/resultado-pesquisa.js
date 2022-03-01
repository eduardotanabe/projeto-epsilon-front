import React from "react"

import veiculoService from "../../service/veiculo-service"
import { Table } from "../../components/table/table"

export default function Pesquisar() {

  const [dados, setDados] = React.useState([])

    React.useEffect(() => {
    veiculoService.consultar()
      .then(
        result => setDados(result.data)
        ,
        error => {
          console.error("Error fethcing data: ", error)
        })
  }, [])



  return (
    <div>
      {Array.isArray(dados) && dados.length ? <Table data={dados}/> : <p>Sem resultado</p>}
    </div>
  )
}