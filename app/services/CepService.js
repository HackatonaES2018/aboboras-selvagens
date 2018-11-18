import CepServiceAbstract from "./CepServiceAbstract";


const BASE_URL = "/json/";


const RESOURCES = {
    BUSCAR: BASE_URL
};



class CepService extends CepServiceAbstract {
    constructor() {
        super();
    }

    buscarCep(cep) {
        let URL = cep + RESOURCES.BUSCAR;

        return this.axios
            .get(URL)
            .then((result) => {
                console.warn(result.data)
                return result.data;
            })
            .catch(error => {
                return error;
            });
    }
}

export default CepService;
