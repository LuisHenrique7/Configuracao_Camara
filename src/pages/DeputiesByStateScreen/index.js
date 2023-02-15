import React from 'react';
import Plot from 'react-plotly.js';
import Ball from '../../components/Ball';
import "./styles.css";

const DeputiesByStateScreen = ({ proporcaoDeputadosPorEstado, goToMainScreen, goToDeputiesByPartyScreen }) => {
    return (
        <div className='containerDepByState'>
            <h1>DeputiesByStateScreen</h1>
            <div className='redSquare'>
                <div className='ballsDeputiesDepByState'>
                    <Ball
                        array={proporcaoDeputadosPorEstado.deputies}
                        useColors={true}
                    />
                </div>
            </div>
            <div className='divGraficBarDepByState'>
                <Plot
                    data = {[
                        {
                            type: "bar",
                            x: proporcaoDeputadosPorEstado.deputies,
                            y: proporcaoDeputadosPorEstado.states,
                            orientation: "h",
                        }
                    ]}
                    layout = {
                        {
                            title: "Quantidades de Deputados eleitos por Estado",
                            showgrid: true,
                            margin: {"t": 50, "b": 50, "l": 110, "r": 10},
                            height: 800
                        }
                    } 
                />
            </div>
            <div className="buttons">
                <button onClick={goToMainScreen}>Tela Principal</button>
                <button onClick={goToDeputiesByPartyScreen}>Deputados por Partido</button>
            </div>
        </div>
    )
}

export default DeputiesByStateScreen