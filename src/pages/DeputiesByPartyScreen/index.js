import React from 'react';
import { useState } from 'react';
import Plot from 'react-plotly.js';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import "./styles.css";

import Ball from '../../components/Ball';

const DeputiesByPartyScreen = ({ deputadosPorPartido }) => {
    const [valueVisualization, setValueVisualization] = useState(0);
    const handleChangeValueVisualization = (event, newValueVisualization) => {
        setValueVisualization(newValueVisualization);
    };

    return (
        <div className='containerDepByPartyScreen'>
            <div className='headerDeputiesByParty'>
                <h1>Deputados por Partido</h1>
            </div>
            <div className='divViewChoiceDeputiesByParty'>
                <p>Escolha o tipo de visualização:</p>
                <Box sx={{bgcolor: 'background.paper', margin: '0px 50px' }}>
                    <Tabs value={valueVisualization} onChange={handleChangeValueVisualization} centered>
                        <Tab label="Exibição com Bolinhas" />
                        <Tab label="Gráfico de Barras" />
                    </Tabs>
                </Box>
            </div>

            {valueVisualization === 0 && (
                <div>
                    <div>
                        <div className="headerGraficBallsDeputiesByParty">
                            <h2>Partido</h2>
                            <h2>Deputados eleitos</h2>
                        </div>
                    </div>
                    <div className='graficBallsDeputiesByParty'>
                        {deputadosPorPartido.parties.map((party, i) => (
                            <div className="partyDeputiesByPartyScreen">
                                <div className='partyNameDeputiesByPartyScreen'>
                                    <h2>{party}</h2>
                                </div>
                                <div className='divBallsDeputiesByParty'>
                                    <Ball
                                        amount={deputadosPorPartido.deputies2022[i]}
                                        color='rgba(55,128,191,0.6)'
                                    />
                                    <p>{deputadosPorPartido.deputies2022[i]}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {valueVisualization === 1 && (
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
            )}
        </div>
    )
}

export default DeputiesByPartyScreen