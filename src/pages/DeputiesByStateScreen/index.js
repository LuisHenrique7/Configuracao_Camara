import React from 'react';
import Plot from 'react-plotly.js';
import Ball from '../../components/Ball';
import "./styles.css";

const DeputiesByStateScreen = ({ proporcaoDeputadosPorEstado }) => {
    return (
        <div className='containerDepByState'>
            <h1>Deputados por Estado</h1>
            <div>
            <div className="headerGraficBallsDeputiesByState">
                <h2>Estado</h2>
                <h2>Deputados eleitos</h2>
            </div>
            </div>
            <div className='graficBallsDeputiesByState'>
                {proporcaoDeputadosPorEstado.states.map((state, i) => (
                    <div className="partyDeputiesByStateScreen">
                        <div className='partyNameDeputiesByStateScreen'>
                            <h2>{state}</h2>
                        </div>
                        <div className='divBallsDeputiesByState'>
                            <Ball
                                amount={proporcaoDeputadosPorEstado.deputies[i]}
                                color='rgba(55,128,191,0.6)'
                            />
                            <p>{proporcaoDeputadosPorEstado.deputies[i]}</p>
                        </div>
                    </div>
                ))}
            </div>



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
        </div>
    )
}

export default DeputiesByStateScreen