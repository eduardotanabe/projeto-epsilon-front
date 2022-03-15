import axios from "axios"
import { useEffect, useState } from "react"

function Fotos() {

  const [imagem, setImagem] = useState(null)
  const [tipoArquivo, setTipoArquivo] = useState(null)

  useEffect(() => {
    axios.get('/imagens/show/5')
      .then(result => {
        const imageBytes = result.data[1].data
        var blob = new Blob([imageBytes],
          {type: `${result.data[1].tipoArquivo}`})
          var imageUrl = URL.createObjectURL(blob)
          setImagem(imageUrl)
      })
  }, [])
    return(
      <div>
        <h1>Renderização de fotos</h1>
        {imagem ? <img src={imagem} width="70%"/> : null}
      </div>
    )
}

export default Fotos
