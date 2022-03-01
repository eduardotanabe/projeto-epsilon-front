import React, { useState } from "react"
import axios from "axios"
import VeiculoService from "../../service/veiculo-service"
import AsyncSelect from 'react-select/async'
import SelectListaAno from "../../components/formulario/selectListaAno"
import { useNavigate } from "react-router-dom"

export default function CadastrarVeiculo() {
  const [modelo, setModelo] = useState("")
  const [placaLicenca, setPlacaLicenca] = useState("")
  const [anoModelo, setAnoModelo] = useState()
  const [marcaSelecionada, setMarcaSelecionada] = useState({})

  const [teste, setTeste] = useState({})

  let listaMarcas = []
  let listaTiposVeiculo = []

  const navigate = useNavigate()

  function preencherParaEnvio() {
    const veiculo = {
      marca: converterParaFormatoBD(marcaSelecionada),
      modelo: modelo,
      placaLicenca: placaLicenca,
      anoModelo: anoModelo,
    }
    return veiculo
  }

  async function pesquisar() {
    let veiculo = await preencherParaEnvio()
    navigate('/resultado', { state: veiculo })
  }

  function converterParaFormatoBD(itemSelecionado) {
    let obj = { id: itemSelecionado.value, nome: itemSelecionado.label }
    return obj
  }


  const conversaoParaDadosLegiveisSelect = (data) => ({
    value: data.id,
    label: data.nome,
  });

  async function listarMarcas() {
    listaMarcas = await axios.get('http://localhost:8181/marcas/')
      .then(res => res.data.content)
      .then(res => res.map(conversaoParaDadosLegiveisSelect))
    return listaMarcas
  }

  async function listarTiposVeiculo() {
    listaTiposVeiculo = await axios.get('http://localhost:8181/tipos-veiculo/')
      .then(res => res.data.content)
      .then(res => res.map(conversaoParaDadosLegiveisSelect))
    return listaTiposVeiculo
  }

  return (
    <div className="container">
      <div className="card border-secondary mb-3 col-7">
        <form>
          <div className="card-body">
            <div className="row">
              <h1 className="alert alert-dismissible alert-primary">Pesquisa de Veículo</h1>
              <div className="col">
                <div className="form-group">
                  <label className="form-label mt-4">Marca do veículo</label>
                  <AsyncSelect loadOptions={listarMarcas}
                    onChange={data => {
                      setMarcaSelecionada(data)
                      console.log(data)
                    }}
                    defaultOptions
                    cacheOptions
                    placeholder="Marca do veículo"
                  />
                </div>
                <div>
                  <div className="form-group">
                    <label className="form-label mt-4">Modelo</label>
                    <input type="text" className="form-control" id="modelo" aria-describedby="emailHelp"
                      placeholder="ex.: GOL 1.6 POWER"
                      value={modelo}
                      onChange={e => setModelo(e.target.value.toUpperCase())} />
                  </div>
                </div>
              </div>

            </div>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <SelectListaAno
                    titulo={"Ano modelo"}
                    anoClicado={ano => setAnoModelo(ano)} />
                </div>
              </div>

              <div className="col">
                <div className="form-group">
                  <label className="form-label mt-4">Placa de licença</label>
                  <input type="text" className="form-control" id="placa-licenca" aria-describedby="emailHelp"
                    placeholder="ex.: ABC9745"
                    value={placaLicenca}
                    onChange={e => setPlacaLicenca(e.target.value.toUpperCase())} />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary btn-lg" onClick={pesquisar}>Pesquisar</button>
            </div>
            <small className="form-text text-muted">** Só é possível pesquisar preenchendo os campos da seguinte forma: </small>
            <br />
            <small className="form-text text-muted">- Marca e modelo;</small>
            <br />
            <small className="form-text text-muted">- Marca e ano modelo;</small>
            <br />
            <small className="form-text text-muted">- Marca, modelo e ano modelo; ou</small>
            <br />
            <small className="form-text text-muted">- Placa de licença.</small>
          </div>
        </form>
      </div>
    </div>
  )
}

