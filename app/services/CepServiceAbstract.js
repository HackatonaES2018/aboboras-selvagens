import axios from "axios";

export default class CepServiceAbstract {
    axios;

    constructor() {
        this.axios = axios.create({
            baseURL: "https://viacep.com.br/ws/"
        });
    }
}
