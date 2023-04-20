import React from 'react';
import { useState } from 'react';

import Plot from 'react-plotly.js';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import "./styles.css";

import Ball from '../../components/Ball';

const SenatorsByStateScreen = ({ senatorsData }) => {
    const [valueVisualization, setValueVisualization] = useState(0);
    const handleChangeValueVisualization = (event, newValueVisualization) => {
        setValueVisualization(newValueVisualization);
    };

    const onlyUnique = (value, index, array) => {
        return array.indexOf(value) === index;
    };

    const stateList = []
    for (var i = 0; i < Object.keys(senatorsData.UfMandatoParlamentar).length; ++i) {
        stateList.push(senatorsData.UfMandatoParlamentar[i])
    };

    const states = stateList.filter(onlyUnique);
    // console.log(states);
    
    const statesCount = [];
    for (var i = 0; i < states.length; ++i) {
        statesCount.push(stateList.filter(x => x===states[i]).length);
    };
    // console.log(statesCount);

    const labelsGraficSunburst = [].concat(states);
    const parentsGraficSunburst = [];
    const valuesGraficSunburst = [].concat(statesCount);

    for (var s = 0; s < states.length; ++s) {
        parentsGraficSunburst.push("");
    };

    for (var s = 0; s < Object.keys(senatorsData.NomeParlamentar).length; ++s) {
        let name = senatorsData.NomeParlamentar[s];
        let state = senatorsData.UfMandatoParlamentar[s];
        labelsGraficSunburst.push(name);
        parentsGraficSunburst.push(state);
        valuesGraficSunburst.push(1);
    };

    return (
        <div className='containerSenatorsByState'>
            <div className='headerSenatorsByState'>
                <h1>Senadores por Estado</h1>
            </div>
            <div className='divViewChoiceSenatorsByState'>
                <p>Escolha o tipo de visualização:</p>
                <Box sx={{bgcolor: 'background.paper', margin: '0px 50px' }}>
                    <Tabs
                        value={valueVisualization}
                        onChange={handleChangeValueVisualization}
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        <Tab label="Exibição com Bolinhas" />
                        <Tab label="Gráfico de Pizza" />
                        <Tab label="Gráfico de Sunburst" />
                        <Tab label="Gráfico de Barras" />
                    </Tabs>
                </Box>
            </div>

            {valueVisualization === 0 && (
                <div>
                    <div>
                        <div className="headerGraficBallsSenatorsByState">
                            <h2>Estado</h2>
                            <h2>Senadores eleitos</h2>
                        </div>
                    </div>
                    <div className='graficBallsSenatorsByState'>
                        {states.map((party, i) => (
                            <div className="partySenatorsByStateScreen" key={i}>
                                <div className='partyNameSenatorsByStateScreen'>
                                    <h2>{party}</h2>
                                </div>
                                <div className='divBallsSenatorsByState'>
                                    <Ball
                                        amount={statesCount[i]}
                                        color='rgba(55,128,191,0.6)'
                                    />
                                    <p>{statesCount[i]}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {valueVisualization === 1 && (
                <div className='generalViewDeputiesByState'>
                    <div>
                        <Plot
                            data = {[
                                {
                                    type: "pie",
                                    values: statesCount,
                                    labels: states,
                                    textinfo: "label+percent",
                                    textposition: "inside",
                                    automargin: true,
                                }
                            ]}
                              
                            layout = {
                                {
                                    title: "Percentagem de Deputados eleitos por Estado",
                                    height: 700,
                                    width: 700,
                                    margin: {"t": 50, "b": 50, "l": 50, "r": 50},
                                    showlegend: false,
                                }
                            }
                           
                        />
                    </div>
                </div>
            )}

            {valueVisualization === 2 && (
                <div className='divSunburstGraficDeputiesByState'>
                    <Plot
                        data = {[
                            {
                                "type": "sunburst",
                                "labels": labelsGraficSunburst,
                                "parents": parentsGraficSunburst,
                                "values":  valuesGraficSunburst,
                                //"leaf": {"opacity": 0.4},
                                "marker": {"line": {"width": 2}},
                                "branchvalues": 'total',
                                textinfo: "label+percent",
                                textposition: "inside",
                                automargin: true,
                                maxdepth: 2,
                            }
                        ]}
                            
                        layout = {
                            {
                                title: "Percentagem de Deputados eleitos por Estado",
                                height: 1200,
                                width: 1200,
                                margin: {"t": 50, "b": 50, "l": 50, "r": 50},
                                showlegend: false,
                            }
                        }
                        
                    />
                </div>
            )}

            {valueVisualization === 3 && (
                <div className="graficSenatorsByState">
                    <Plot
                        data = {[
                            {
                                type: "bar",
                                x: statesCount,
                                y: states,
                                orientation: "h",
                            }
                        ]}
                        layout = {
                            {
                                title: "Quantidades de Deputados eleitos por Partido",
                                showgrid: true,
                                height: 700,
                                width: 700,
                                margin: {"t": 80, "b": 50, "l": 110, "r": 10},
                                showticklabels: true
                            }
                        } 
                    />
                </div>
            )}
        </div>
        
    )
}

export default SenatorsByStateScreen