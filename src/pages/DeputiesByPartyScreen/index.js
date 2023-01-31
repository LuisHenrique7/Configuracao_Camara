import React from 'react';
import Plot from 'react-plotly.js';

import "./styles.css";

const DeputiesByPartyScreen = ({ deputadosPorPartido,  goToMainScreen, goToDeputiesByStateScreen }) => {
  return (
    <div className='containerDepByPartyScreen'>
        <h1>DeputiesByPartyScreen</h1>
        <div className="graficDeputiesByParty">
            <Plot
                data = {[
                    {
                        type: "bar",
                        x: deputadosPorPartido.deputies2022,
                        y: deputadosPorPartido.parties,
                        orientation: "h",
                    }
                ]}
                layout = {
                    {
                        title: "Quantidades de Deputados eleitos por Partido",
                        showgrid: true,
                        margin: {"t": 50, "b": 50, "l": 110, "r": 10},
                        showticklabels: true
                    }
                } 
            />
        </div>
        <div className="buttons">
            <button onClick={goToMainScreen}>Tela Principal</button>
            <button onClick={goToDeputiesByStateScreen}>Deputados por Estado</button>
        </div>
    </div>
  )
}

export default DeputiesByPartyScreen