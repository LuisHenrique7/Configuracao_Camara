import React from 'react';
import { useState, useEffect } from 'react';

const url = "https://dadosabertos.camara.leg.br/api/v2/deputados/204554";
const urlFoto = "https://www.camara.leg.br/internet/deputado/bandep/204554.jpg";

const DeputiesScreen = () => {
    const [deputieData, setDeputieData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(url);

            const data = await res.json();

            console.log(data);
            setDeputieData(data);
        }

        fetchData();
    }, []);
    
    return (
        <div>
            <div><h1>DeputiesScreen</h1></div>
            {/* <div>
                <img src={deputieData.dados.ultimoStatus.urlFoto}/>
            </div>
            
            <ul>
                <li>Nome Civil: {deputieData.dados.nomeCivil}</li>
                <li>CPF: {deputieData.dados.cpf}</li>
                <li>Data de Nascimento: {deputieData.dados.dataNascimento}</li>
                <li>Escolaridade: {deputieData.dados.escolaridade}</li>
                <li>Condição Eleitoral: {deputieData.dados.ultimoStatus.condicaoEleitoral}</li>
                <li>Partido: {deputieData.dados.ultimoStatus.siglaPartido}</li>
                <li>UF: {deputieData.dados.ultimoStatus.siglaUf}</li>
                <li>Situação: {deputieData.dados.ultimoStatus.situacao}</li>
                <li>Telefone do Gabinete: {deputieData.dados.ultimoStatus.gabinete.telefone}</li>
            </ul> */}
        </div>
    )
}

export default DeputiesScreen