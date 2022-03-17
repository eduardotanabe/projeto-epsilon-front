import axios from "axios"
import { useEffect, useState } from "react"

export default function RenderizadorImagem(props) {

  const [idImagem] = useState(props.id)
  const [byteArray, setByteArray] = useState(null)
  
  useEffect(() => {
      axios.get(`/imagens/show/imagem/${idImagem}`)
        .then(result => { setByteArray(result.data)
        })
  }, [idImagem])

  return (

    <div>
        {idImagem ? <img className="d-block w-100" src={`data:image/jpg;base64,${byteArray}`} 
                        width="70%" alt=""/> : null}
    </div>
  )
}
