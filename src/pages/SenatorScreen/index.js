import React from 'react';
import { useParams } from 'react-router-dom';

import './styles.css';

const SenatorScreen = ({ senadoresEmExercicio }) => {
    const { id } = useParams();

    return (
        <div className='containerSenatorScreen'>
            <div className='headerSenatorScreen'>
                <h1>Informações do Senador</h1>
            </div>
            <p>Nome: {senadoresEmExercicio.NomeParlamentar[id]}</p>
            <p>Nome Completo: {senadoresEmExercicio.NomeCompletoParlamentar[id]}</p>
            <p>Email: {senadoresEmExercicio.EmailParlamentar[id]}</p>
            <p>UF do Parlamentar: {senadoresEmExercicio.UfParlamentar[id]}</p>
            <p>Partido: {senadoresEmExercicio.SiglaPartidoParlamentar[id]}</p>
            <p>Nome do Bloco: {senadoresEmExercicio.NomeBloco[id]}</p>
            <p>UF do Mandato do Parlamentar: {senadoresEmExercicio.UfMandatoParlamentar[id]}</p>
            <p>Data de início da Primeira Legislatura: {senadoresEmExercicio.DataInicioPrimeiraLegislatura[id]}</p>
            <p>Data final da Primeira Legislatura: {senadoresEmExercicio.DataFimPrimeiraLegislatura[id]}</p>
            <p>Data de início da Segunda Legislatura: {senadoresEmExercicio.DataInicioSegundaLegislatura[id]}</p>
            <p>Data final da Segunda Legislatura: {senadoresEmExercicio.DataFimSegundaLegislatura[id]}</p>
            <p>Participação: {senadoresEmExercicio.DescricaoParticipacao[id]}</p>
            <p>1º Suplente: {senadoresEmExercicio['1º Suplente'][id]}</p>
            <p>2º Suplente: {senadoresEmExercicio['2º Suplente'][id]}</p>
        </div>
    )
}

export default SenatorScreen