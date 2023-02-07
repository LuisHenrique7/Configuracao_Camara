import React from 'react';
import { useState, useEffect } from 'react';
import DeputiesScreen from '../DeputiesScreen';

import { useFetch } from '../../hooks/useFetch';

const url = "https://dadosabertos.camara.leg.br/api/v2/deputados?itens=5&ordem=ASC&ordenarPor=nome";

const DeputiesListScreen = () => {
    const [deputieSelected, setDeputieSelected] = useState(false);

    // const [deputiesData, setDeputiesData] = useState([]);

    const { data: items, loading, error } = useFetch(url);

    // useEffect(() => {
    //     async function fetchData() {
    //         const res = await fetch(url);

    //         const data = await res.json();

    //         console.log(data);
    //         setDeputiesData(data);
    //     }

    //     fetchData();
    // }, []);
    
    return (
        <div>
            {deputieSelected === false ? (
                <div>
                    <h1>DeputiesListScreen</h1>
                    <button onClick={() => {setDeputieSelected(true)}}>Deputado</button>
                    {loading && <p>Carregando dados...</p>}
                    {error && <p>{error}</p>}
                    <ul>
                        {items &&
                        items.dados.map((deputie) => (
                            <li key={deputie.id}>
                                <img src={deputie.urlFoto} />
                                <p>Nome: {deputie.nome}</p>
                                <p>Partido: {deputie.siglaPartido}</p>
                                <p>UF: {deputie.siglaUf}</p>
                            </li>
                        ))}
                    </ul>
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