import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import axios from "axios"

import RenderizadorImagem from "./RenderizadorImagem"

export default function Fotos() {

  const location = useLocation()

  const [idImagens, setIdImagens] = useState([])
  const [idVeiculo] = useState(location.state.id)

  useEffect(() => {
    axios.get(`/imagens/show/${idVeiculo}`)
      .then(result => {
        setIdImagens(result.data)
      })

  }, [idVeiculo])

  return (
    <div>
      <h1>Renderização de fotos</h1>
          {idImagens ? idImagens.map((id, index) => <RenderizadorImagem id={id} key={id} index={index} />) : null}
    </div>
  )
}
