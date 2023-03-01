import React from 'react';
import './styles.css';

const MainScreen = () => {
    return (
        <div className="container-main">
            <div className='headerMainScreen'>
                <h1>Prometeu - Configuração do Congresso</h1>
            </div>
            <div className='divAboutMainScreen'>
                <div>
                    <h3>Prometeu:</h3>
                    <p>É uma base de aplicações voltadas a divulgação de dados dos membros do governo brasileiro.</p>
                </div>
                <div>
                    <h3>Configuração do Congresso:</h3>
                    <p>É uma aplicação de visualização da organização atual do Congresso Nacional.</p>
                    <p>Seu objetivo é prover a população brasileira uma forma de visualizar como estão distribuídos os cargos de deputados e senadores por Estado e Partido.</p>
                    <p>Na aplicação também é possível ver individualmente cada deputado e senador, seus emails e outras informações. Há informações sobre as composições das mesas diretoras da Câmara dos Deputados e do Senado Federal. Além de exibições comparativas da configuração atual da Câmara com sua configuração na eleição passada.</p>
                </div>
            </div>
        </div>
    )
}

export default MainScreen