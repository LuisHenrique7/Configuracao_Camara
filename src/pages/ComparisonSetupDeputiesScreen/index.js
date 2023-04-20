import React from 'react';
import { useState } from 'react';
import Plot from 'react-plotly.js';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import './styles.css';

import Ball from '../../components/Ball';

const ComparisonSetupDeputiesScreen = ({ deputadosPorPartido }) => {
    const [valueVisualization, setValueVisualization] = useState(0);
    const handleChangeValueVisualization = (event, newValueVisualization) => {
        setValueVisualization(newValueVisualization);
    };

    return (
        <div className='containerComparisonSetupDeputiesScreen'>
            <div className='headerComparisonSetupDeputiesScreen'>
                <h1>Comparação entre as configurações da Câmara</h1>
            </div>
            <div className='divViewChoiceComparisonSetupDeputies'>
                <p>Escolha o tipo de visualização:</p>
                <Box sx={{bgcolor: 'background.paper', margin: '0px 50px' }}>
                    <Tabs
                        value={valueVisualization}
                        onChange={handleChangeValueVisualization}
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        <Tab label="Exibição com Bolinhas" />
                        <Tab label="Gráfico de Barras" />
                    </Tabs>
                </Box>
            </div>
            {valueVisualization === 0 && (
                <div>
                    <div className="headerGraficBallsComparisonSetupDep">
                        <h2 style={window.innerWidth < 710 ? {fontSize: 'larger'} : {}}>Partido</h2>
                        <h2 style={window.innerWidth < 710 ? {fontSize: 'larger'} : {}}>Deputados eleitos em 2018</h2>
                        <h2 style={window.innerWidth < 710 ? {fontSize: 'larger'} : {}}>Deputados eleitos em 2022</h2>
                    </div>
                    <div className='graficBallsComparisonSetupDep'>
                        {deputadosPorPartido.parties.map((party, i) => (
                            <div className="partyComparisonSetupDeputiesScreen" key={i}>
                                <div className='partyNameComparisonSetupDeputiesScreen'>
                                    <h2>{party}</h2>
                                    <p>Saldo: {deputadosPorPartido.deputies2022[i] - deputadosPorPartido.deputies2018[i]}</p>
                                </div>
                                <div className='divBallsDeputiesComparisonSetupDep'>
                                    <Ball
                                        amount={deputadosPorPartido.deputies2018[i]}
                                        color='rgba(255,153,51,0.6)'
                                    />
                                    <p>{deputadosPorPartido.deputies2018[i]}</p>
                                </div>
                                <div className='divBallsDeputiesComparisonSetupDep'>
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
                <div className="graficComparisonSetupDeputiesScreen">
                    <Plot
                        data = {[
                            {
                                type: "bar",
                                x: deputadosPorPartido.deputies2022,
                                y: deputadosPorPartido.parties,
                                orientation: "h",
                                name: 'Deputados eleitos em 2022',
                                marker: {
                                    color: 'rgba(55,128,191,0.6)',
                                    width: 1
                                },
                            },
                            {
                                type: "bar",
                                x: deputadosPorPartido.deputies2018,
                                y: deputadosPorPartido.parties,
                                orientation: "h",
                                name: 'Deputados eleitos em 2018',
                                marker: {
                                    color: 'rgba(255,153,51,0.6)',
                                    width: 1
                                },
                            }
                        ]}
                        layout = {
                            {
                                title: "Quantidades de Deputados eleitos por Partido",
                                showgrid: true,
                                margin: {"t": 80, "b": 50, "l": 110, "r": 10},
                                showticklabels: true,
                                height: 1000,
                                barmode: 'group',
                            }
                        } 
                    />
                </div>
            )}
        </div>
    )
}

export default ComparisonSetupDeputiesScreen