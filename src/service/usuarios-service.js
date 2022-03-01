import ApiService from "../apiservice"

class UsuarioService extends ApiService {

    constructor() {
        super('/usuarios')
    }
}

export default UsuarioService;