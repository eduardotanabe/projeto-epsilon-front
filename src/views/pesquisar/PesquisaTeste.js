import axios from 'axios'
import React from 'react'
import {  Outlet, Route, Routes, useNavigate, useParams  } from 'react-router-dom'
import veiculoService from '../../service/veiculo-service'

import ResultadoTeste from './ResultadoTeste'

export default (props) => {

    const [teste, setTeste] = React.useState([])
    React.useEffect(() => {
        veiculoService.consultarPorMarca(2)
        .then(result => {
            setTeste(result.data)
            console.log(result.data)
        })
    }, []) 




    const navigate = useNavigate()

    return(
        <div>
            <button onClick={() => navigate('/resultado', 
                {state: teste} )}>Teste</button>
        </div>

    )
}