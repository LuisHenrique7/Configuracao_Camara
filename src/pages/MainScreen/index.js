import React from 'react';
import './styles.css';

const MainScreen = ({ goToTestScreen, goToDeputiesByStateScreen, goToDeputiesByPartyScreen, goToComparisonSetupDeputiesScreen }) => {
    return (
        <div>
            <h1>MainScreen Prometeu</h1>
            <div className="buttons">
                <button onClick={goToTestScreen}>Tela de Exemplo</button>
                <button onClick={goToDeputiesByStateScreen}>Deputados por Estado</button>
                <button onClick={goToDeputiesByPartyScreen}>Deputados por Partido</button>
                <button onClick={goToComparisonSetupDeputiesScreen}>Comparação entre configuração de 2022 e 2018</button>
            </div>
            <div className="blueSquare"><p>Informações sobre a aplicação</p></div>
        </div>
    )
}

export default MainScreen