import React from 'react';
import { useParams } from 'react-router-dom';

import './styles.css';

const DeputiesScreen = ({ deputadosEmExercicio }) => {
    const { id } = useParams();

    return (
        <div className='containerDeputieScreen'>
            <div className='headerDeputieScreen'>
                <h1>Informações do Deputado</h1>
            </div>
            <div className='deputieDataDeputieScreen'>
                <div className='deputiePictureDeputieScreen'>
                    <img src={require(`../../data/pictures/deputiesPictures/${deputadosEmExercicio.nome[id]}_${deputadosEmExercicio.id[id]}.jpg`)} />
                </div>
                <div className='deputieInfoDeputieScreen'>
                    <p>Nome: {deputadosEmExercicio.nome[id]}</p>
                    <p>Sigla do Partido: {deputadosEmExercicio.siglaPartido[id]}</p>
                    <p>UF: {deputadosEmExercicio.siglaUf[id]}</p>
                    {/* <p>urlFoto: {deputadosEmExercicio.urlFoto[id]}</p> */}
                    <p>Email: {deputadosEmExercicio.email[id]}</p>
                </div>
            </div>
        </div>
    )
}

export default DeputiesScreen