import React from 'react';
import { useState } from 'react';
import Plot from 'react-plotly.js';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import "./styles.css";

import Ball from '../../components/Ball';

const DeputiesByStateScreen = ({ proporcaoDeputadosPorEstado, deputadosEmExercicio }) => {
    const [valueVisualization, setValueVisualization] = useState(0);
    const handleChangeValueVisualization = (event, newValueVisualization) => {
        setValueVisualization(newValueVisualization);
    };

    const namesByState = [];
    const namesStates = [];

    const labelsGraficSunburst = [].concat(proporcaoDeputadosPorEstado.states);
    const parentsGraficSunburst = [];
    const valuesGraficSunburst = [].concat(proporcaoDeputadosPorEstado.deputies);

    for (var s = 0; s < proporcaoDeputadosPorEstado.states.length; ++s) {
        parentsGraficSunburst.push("");
    };

    for (var s = 0; s < Object.keys(deputadosEmExercicio.nome).length; ++s) {
        let name = deputadosEmExercicio.nome[s];
        let state = deputadosEmExercicio.siglaUf[s];
        labelsGraficSunburst.push(name);
        parentsGraficSunburst.push(state);
        valuesGraficSunburst.push(1);
    };


    for (var s = 0; s < proporcaoDeputadosPorEstado.states.length; ++s) {
        namesByState.push(0);
        namesStates.push(0);
    };

    for (var s = 0; s < Object.keys(deputadosEmExercicio.nome).length; ++s) {
        let name = deputadosEmExercicio.nome[s];
        let state = deputadosEmExercicio.siglaUf[s];
        let index = proporcaoDeputadosPorEstado.states.indexOf(state);
        namesByState[index] = namesByState[index] + 1;
        namesStates[index] = namesStates[index] + 1;
    };

    
    console.log(proporcaoDeputadosPorEstado.deputies.reduce((a, b) => {
        return a + b;
      }, 0));
    console.log("-----------------------------------------")
    console.log(labelsGraficSunburst);
    console.log(parentsGraficSunburst);
    console.log(valuesGraficSunburst);
    console.log("-----------------------------------------")
    console.log("namesStates", namesStates)

    // https://flexiple.com/javascript/flatten-array-javascript/
    // let flatArrayNamesByState = [].concat.apply([], namesByState);
    // flatArrayNamesByState = [].concat.apply([], flatArrayNamesByState);
    // console.log(flatArrayNamesByState);

    // let flatArrayNamesStates = [].concat.apply([], namesStates);
    // flatArrayNamesStates = [].concat.apply([], flatArrayNamesStates);
    // console.log(flatArrayNamesStates);


    return (
        <div className='containerDepByState'>
            <div className='headerDeputiesByState'>
                <h1>Deputados por Estado</h1>
            </div>
            <div className='divViewChoiceDeputiesByState'>
                <p>Escolha o tipo de visualização:</p>
                <Box sx={{bgcolor: 'background.paper', margin: '0px 50px' }}>
                    <Tabs
                        value={valueVisualization}
                        onChange={handleChangeValueVisualization}
                        variant="scrollable"
                        scrollButtons="auto"
                        centered
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
                    <div className="headerGraficBallsDeputiesByState">
                        <div style={{width: '90%', display:'flex', justifyContent: 'space-around', marginLeft: '-30px'}}>
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
                </div>
            )}

            {valueVisualization === 1 && (
                <div className='generalViewDeputiesByState'>
                    <div>
                        <Plot
                            data = {[
                                {
                                    type: "pie",
                                    values: proporcaoDeputadosPorEstado.deputies,
                                    labels: proporcaoDeputadosPorEstado.states,
                                    textinfo: "label+percent",
                                    textposition: "inside",
                                    automargin: true,
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
                    {/* <div>
                        <Plot
                            data = {[
                                {
                                    "type": "sunburst",
                                    "labels": ["Eve", "Cain", "Seth", "Enos", "Noam", "Abel", "Awan", "Enoch", "Azura"],
                                    "parents": ["", "", "", "Seth", "Seth", "", "", "Awan", "" ],
                                    "values":  [65, 14, 12, 10, 2, 6, 6, 4, 4],
                                    "leaf": {"opacity": 0.4},
                                    "marker": {"line": {"width": 2}},
                                    "branchvalues": 'total'
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
                    </div> */}
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