import axios from "axios";

export default class AbstractService {
    axios;

    constructor() {
        this.axios = axios.create({
            baseURL: "https://sb-api.portocred.com.br/credito-pessoal-demo/v1/",
            headers: {'client_id': '2f1cd2f8-b150-3800-8531-7a5fd127190e'}
        });
    }
}
