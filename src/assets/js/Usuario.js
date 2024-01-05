import axios from "axios";

var url = `http://localhost:8081/personas`

export const registrarUsuarioFachada = async (body) => {
    return await registrarUsuario(body);
}

const registrarUsuario= async (body) => {
    return axios.post(url + `/insertar`, body).then(r => r.data)
}
