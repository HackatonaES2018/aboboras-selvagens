import AbstractService from "./AbstractService";


const BASE_URL = "simulacoes/";


const RESOURCES = {
    SIMULACAO: BASE_URL
};



class CreditoPessoalService extends AbstractService {
    constructor() {
        super();
    }


    simulacao() {
        let URL = RESOURCES.SIMULACAO;

        return this.axios
            .post(URL)
            .then((result) => {
                console.warn(result.data)
                return result.data;
            })
            .catch(error => {
                return error;
            });
    }
}

export default CreditoPessoalService;
