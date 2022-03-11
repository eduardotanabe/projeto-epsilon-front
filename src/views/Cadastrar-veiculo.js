import React, { useState } from "react"
import axios from "axios"
import AsyncSelect from 'react-select/async'

import SelectListaAno from "../components/formulario/selectListaAno"
import SelectAnoModelo from "../components/formulario/selectAnoModelo"

export default function CadastrarVeiculo() {
    const [modelo, setModelo] = useState("")
    const [placaLicenca, setPlacaLicenca] = useState("")
    const [anoFabricacao, setAnoFabricacao] = useState(0)
    const [anoModelo, setAnoModelo] = useState(0)
    const [sequencialChassi, setSequencialChassi] = useState("")
    const [sequencialMotor, setSequencialMotor] = useState("")
    const [marcaSelecionada, setMarcaSelecionada] = useState({})
    const [tipoVeiculoSelecionado, setTipoVeiculoSelecionado] = useState({})

    const [arquivoPdf, setArquivoPdf] = useState(null)

    const [foto1, setFoto1] = useState(null)

    let listaMarcas = []
    let listaTiposVeiculo = []

    function preencherParaEnvio() {
        const veiculo = {
            marca: converterParaFormatoBD(marcaSelecionada),
            tipoVeiculo: converterParaFormatoBD(tipoVeiculoSelecionado),
            modelo,
            placaLicenca,
            anoFabricacao,
            anoModelo,
            sequencialChassi,
            sequencialMotor
        }
        return veiculo
    }

    async function preencherFormulario(arquivo) {
        const url = 'veiculos/uploads'
        const formData = new FormData()
        await formData.append('file', arquivo)
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            }
        }

        axios.post(url, formData, config)
            .then(result => {
                console.log(result.data)
                setAnoFabricacao(result.data.anoFabricacao)
                setModelo(result.data.modelo)
                setAnoModelo(result.data.anoModelo)
                setAnoModelo(result.data.anoModelo)
                setSequencialChassi(result.data.sequencialChassi)
                setSequencialMotor(result.data.sequencialMotor)
                setPlacaLicenca(result.data.placaLicenca)
            })
    }

    async function uploadfoto(foto) {
        const url = 'imagens/upload'
        const formData = new FormData()
        await formData.append('file', foto)
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            }
        }
        axios.post(url, formData, config)
            .then(result => console.log(result.data))
    }

    async function cadastrar() {
        let veiculo = await preencherParaEnvio()
        axios.post('veiculos/', veiculo)
            .then(
                result => console.log(veiculo),
            )
            .catch(err => console.log(err.message))
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

            <h1 className="alert alert-dismissible alert-primary">Cadastro de Veículo</h1>
            <div className="row">
                <div className="mb-3 col-7">
                    <form>
                        <div className="row">
                            <div className="card-body">
                                <div className="row">

                                    <div className="col">
                                        <div className="form-group">
                                            <label className="form-label mt-4">Marca do veículo</label>
                                            <AsyncSelect loadOptions={listarMarcas}
                                                onChange={data => {
                                                    setMarcaSelecionada(data)
                                                }}
                                                defaultOptions
                                                cacheOptions
                                                placeholder="Marca do veículo"
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label className="form-label mt-4">Tipo do veículo</label>
                                            <AsyncSelect loadOptions={listarTiposVeiculo}
                                                onChange={data => {
                                                    setTipoVeiculoSelecionado(data)
                                                }}
                                                defaultOptions
                                                cacheOptions
                                                placeholder="Tipo do veículo"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label className="form-label mt-4">Modelo</label>
                                            <input type="text" className="form-control" id="modelo" aria-describedby="emailHelp"
                                                placeholder="ex.: GOL 1.6 POWER"
                                                value={modelo}
                                                onChange={e => setModelo(e.target.value.toUpperCase())} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label className="form-label mt-4">Placa de licença</label>
                                            <input type="text" className="form-control" id="placa-licenca" aria-describedby="emailHelp"
                                                placeholder="ex.: ABC9745"
                                                value={placaLicenca}
                                                onChange={e => setPlacaLicenca(e.target.value.toUpperCase().trim())} />
                                        </div>

                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <SelectListaAno
                                                titulo={"Ano de fabricação"}
                                                anoClicado={ano => {
                                                    setAnoFabricacao(ano)
                                                    setAnoModelo(ano)
                                                }
                                                } />
                                        </div>

                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <SelectAnoModelo
                                                anoFabricacao={anoFabricacao}
                                                anoModeloClicado={ano => {
                                                    setAnoModelo(ano)
                                                }}
                                            />
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label className="form-label mt-4">Sequencial do chassi</label>
                                        <input type="text" className="form-control" id="sequencial-chassi" aria-describedby="emailHelp"
                                            placeholder="ex.: 9BWAA05U9DP222222"
                                            value={sequencialChassi}
                                            onChange={e => setSequencialChassi(e.target.value.toUpperCase().trim())} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label mt-4">Sequecial do bloco de motor</label>
                                        <input type="text" className="form-control" id="sequencial-motor" aria-describedby="emailHelp"
                                            placeholder="ex.: CCNC11111"
                                            value={sequencialMotor}
                                            onChange={e => setSequencialMotor(e.target.value.toUpperCase().trim())} />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="formFile" className="form-label mt-4">** Caso queira, adicione arquivo .PDF para preencher o formulário de forma automática</label>
                                    <div className="form-group">
                                        <div className="input-group mb-3">
                                            <input type="file" name="file" id="formFile" className="form-control" onChange={e => setArquivoPdf(e.target.files[0])} />
                                            <div className="input-group-append">
                                                <button className="btn btn-warning btn-outline-secondary" type="button"
                                                    onClick={e => preencherFormulario(arquivoPdf)}>Preencher</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div >
                                    <button type="button" className="btn btn-primary btn-lg" onClick={cadastrar}>Cadastrar</button>
                                </div>
                                <small className="form-text text-muted">** Preencher todos os campos</small>

                            </div>
                            <div className="card-body">

                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-sm">
                    <label htmlFor="formFile" className="form-label mt-4">Fotografia teste</label>
                    <div className="form-group">
                        <div className="input-group mb-3">
                            <input type="file" name="file" id="formFile" className="form-control" onChange={e => setFoto1(e.target.files[0])} />
                            <div className="input-group-append">
                                <button className="btn btn-warning btn-outline-secondary" type="button"
                                    onClick={e => uploadfoto(foto1)}>Teste</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
