import axios from "axios"
import { useEffect, useState } from "react"

function Fotos() {

  const [imagem, setImagem] = useState(null)

  useEffect(() => {
    axios.get('/imagens/show/1')
      .then(result => {
        setImagem(result.data)
        console.log(result)
      })
  }, [])
    return(
      <div>
        <h1>Renderização de fotos</h1>
        <img src={`data:image/jpg;base64,${imagem}`} width="70%" height="100%"/>
      </div>
    )
}

export default Fotos
