import ApiService from "./apiservice"

class VeiculoService extends ApiService {

    constructor() {
        super('/veiculos')
    }

    consultar = function() {
        return this.get('/')
    }

    consultarPorMarca = function(idMarca) {
        return this.get(`/veiculos-marca/${idMarca}`)
    }
    
    consultarPorPlaca = function(placa) {
        return this.get(`/veiculos-placa/${placa}`)
    }
    
    consultarPorMarcaModelo = function(idMarca, modelo) {
        return this.get(`/veiculos-marca-modelo/${idMarca}/${modelo}`)
    }
    
    consultarPorMarcaAno = function(idMarca, ano) {
        return this.get(`/veiculos-marca-ano/${idMarca}/${ano}`)
    }
    
    consultarPorMarcaModeloAno = function(idMarca, modelo, anoModelo) {
        return this.get(`/veiculos-marca-modelo-ano/${idMarca}/${modelo}/${anoModelo}`)
    }

    consultarId = function(id) {
        return this.get(`/${id}`)
    }

    cadastrar = function(veiculo) {
        return this.post('/', veiculo)
    }
}

export default new VeiculoService();