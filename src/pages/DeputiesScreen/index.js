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
                    <h4>Nome: {deputadosEmExercicio.nome[id]}</h4>
                    <h5>Sigla do Partido: {deputadosEmExercicio.siglaPartido[id]}</h5>
                    <h5>UF: {deputadosEmExercicio.siglaUf[id]}</h5>
                    <h5>Email: {deputadosEmExercicio.email[id]}</h5>
                </div>
            </div>
        </div>
    )
}

export default DeputiesScreen