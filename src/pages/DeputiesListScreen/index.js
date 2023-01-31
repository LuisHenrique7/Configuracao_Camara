import React from 'react';
import { useState, useEffect } from 'react';
import DeputiesScreen from '../DeputiesScreen';

const url = "https://dadosabertos.camara.leg.br/api/v2/deputados?itens=5&ordem=ASC&ordenarPor=nome";

const DeputiesListScreen = () => {
    const [deputieSelected, setDeputieSelected] = useState(false);

    const [deputiesData, setDeputiesData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(url);

            const data = await res.json();

            console.log(data);
            setDeputiesData(data);
        }

        fetchData();
    }, []);
    
    return (
        <div>
            {deputieSelected === false ? (
                <div>
                    <h1>DeputiesListScreen</h1>
                    <button onClick={() => {setDeputieSelected(true)}}>Deputado</button>
                    {/* <ul>
                        {deputiesData.dados.map((deputie) => (
                            <li key={deputie.id}>
                                <img src={deputie.urlFoto} />
                                <p>Nome: {deputie.nome}</p>
                                <p>Partido: {deputie.siglaPartido}</p>
                                <p>UF: {deputie.siglaUf}</p>
                            </li>
                        ))}
                    </ul> */}
                </div>) : (
                <div>
                    <DeputiesScreen />
                </div>)
            }
        </div>
    )
}

export default DeputiesListScreen