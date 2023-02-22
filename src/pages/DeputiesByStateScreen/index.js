import React from 'react';
import { useState } from 'react';
import Plot from 'react-plotly.js';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import "./styles.css";

import Ball from '../../components/Ball';

const DeputiesByStateScreen = ({ proporcaoDeputadosPorEstado }) => {
    const [valueVisualization, setValueVisualization] = useState(0);
    const handleChangeValueVisualization = (event, newValueVisualization) => {
        setValueVisualization(newValueVisualization);
    };

    return (
        <div className='containerDepByState'>
            <h1>Deputados por Estado</h1>
            <div>
                <p>Escolha o tipo de visualização:</p>
                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <Tabs value={valueVisualization} onChange={handleChangeValueVisualization} centered>
                        <Tab label="Exibição com Bolinhas" />
                        <Tab label="Exibição Geral da Câmara" />
                        <Tab label="Gráfico de Barras" />
                    </Tabs>
                </Box>
            </div>
            {valueVisualization === 0 && (
                <div>
                    <div className="headerGraficBallsDeputiesByState">
                        <h2>Estado</h2>
                        <h2>Deputados eleitos</h2>
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
                </div>
            )}

            {valueVisualization === 1 && (
                <div className='redSquare'>
                    <div className='ballsDeputiesDepByState'>
                        <Ball
                            array={proporcaoDeputadosPorEstado.deputies}
                            useColors={true}
                        />
                    </div>
                </div>
            )}

            {valueVisualization === 2 && (
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
            )}
        </div>
    )
}

export default DeputiesByStateScreen