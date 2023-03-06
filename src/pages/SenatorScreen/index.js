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
            <div className='senatorDataSenatorScreen'>
                <div className='senatorPictureSenatorScreen'>
                    <img src={require(`../../data/pictures/senatorsPictures/${senadoresEmExercicio.NomeParlamentar[id]}.jpg`)} />
                </div>
                <div className='senatorInfoSenatorScreen'>
                    <h4>Nome: {senadoresEmExercicio.NomeParlamentar[id]}</h4>
                    <h5>Nome Completo: {senadoresEmExercicio.NomeCompletoParlamentar[id]}</h5>
                    <h5>Email: {senadoresEmExercicio.EmailParlamentar[id]}</h5>
                    <h5>UF do Parlamentar: {senadoresEmExercicio.UfParlamentar[id]}</h5>
                    <h5>Partido: {senadoresEmExercicio.SiglaPartidoParlamentar[id]}</h5>
                    
                    <h5>UF do Mandato do Parlamentar: {senadoresEmExercicio.UfMandatoParlamentar[id]}</h5>
                    
                    <h5>Participação: {senadoresEmExercicio.DescricaoParticipacao[id]}</h5>
                    
                </div>
            </div>
            <div className='divDateInfoSenatorScreen'>
                <div style={{textAlign:'left'}}>
                    <h5>Data de início da Primeira Legislatura: {senadoresEmExercicio.DataInicioPrimeiraLegislatura[id]}</h5>
                    <h5>Data final da Primeira Legislatura: {senadoresEmExercicio.DataFimPrimeiraLegislatura[id]}</h5>
                </div>
                <div style={{textAlign:'left'}}>
                    <h5>Data de início da Segunda Legislatura: {senadoresEmExercicio.DataInicioSegundaLegislatura[id]}</h5>
                    <h5>Data final da Segunda Legislatura: {senadoresEmExercicio.DataFimSegundaLegislatura[id]}</h5>
                </div>
            </div>
            <div className='divAditionalInfoSenatorScreen'>
                <h5>Nome do Bloco: {senadoresEmExercicio.NomeBloco[id]}</h5>
                <h5>1º Suplente: {senadoresEmExercicio['1º Suplente'][id]}</h5>
                <h5>2º Suplente: {senadoresEmExercicio['2º Suplente'][id]}</h5>
            </div>
        </div>
    )
}

export default SenatorScreen