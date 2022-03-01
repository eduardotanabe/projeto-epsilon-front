import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../views/Home'
import CadastrarVeiculo from '../views/Cadastrar-veiculo'
import Pesquisar from '../views/pesquisar/Pesquisar'
import Sobre from '../views/Sobre'
import ResultadoPesquisa from '../views/pesquisar/resultado-pesquisa'
import PesquisaTeste from '../views/pesquisar/PesquisaTeste'
import ResultadoTeste from '../views/pesquisar/ResultadoTeste'
import PaginaNãoEncontrada from '../views/Pagina-não-encontrada'

function Rotas() {
    return(
        <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='/cadastrar-veiculo' element={ <CadastrarVeiculo /> } />
            <Route path='/pesquisar' element={ <Pesquisar /> } />
            <Route path='/resultado-pesquisa' element={ <ResultadoPesquisa />} />
            <Route path='/sobre' element={ <Sobre /> }/>
            <Route path='/pesquisa-teste' element={ <PesquisaTeste /> } />
            <Route path='/resultado' element={ <ResultadoTeste /> } />
            <Route path='*' element={ <PaginaNãoEncontrada /> } />
        </Routes>
    )
}

export default Rotas
