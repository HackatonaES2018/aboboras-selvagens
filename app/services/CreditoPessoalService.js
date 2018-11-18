import AbstractService from "./AbstractService";


const BASE_URL = "simulacoes/";
const CONDICOES = "propostas/1/condicoes";


const RESOURCES = {
    SIMULACAO: BASE_URL,
    CONDICOES: CONDICOES
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

    condicoes() {
        let URL = RESOURCES.CONDICOES;

        return this.axios
            .get(URL)
            .then((result) => {
                console.warn(result.data)
                return result.data['texto-condicoes'];
            })
            .catch(error => {
                return error;
            });
    }
}

export default CreditoPessoalService;
