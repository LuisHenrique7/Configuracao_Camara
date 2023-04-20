import React from 'react';
import { useState } from 'react';
import Plot from 'react-plotly.js';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import "./styles.css";

import Ball from '../../components/Ball';

const DeputiesByPartyScreen = ({ deputadosPorPartido, deputadosEmExercicio }) => {
    const [valueVisualization, setValueVisualization] = useState(0);
    const handleChangeValueVisualization = (event, newValueVisualization) => {
        setValueVisualization(newValueVisualization);
    };

    const onlyUnique = (value, index, array) => {
        return array.indexOf(value) === index;
    };

    const partyList = [];
    const namesList = [];

    for (var i = 0; i < Object.keys(deputadosEmExercicio.siglaPartido).length; ++i) {
        partyList.push(deputadosEmExercicio.siglaPartido[i]);
        namesList.push(deputadosEmExercicio.nome[i]);
    };


    const parties = partyList.filter(onlyUnique);
    const partiesCount = [];
    
    for (var i = 0; i < parties.length; ++i) {
        partiesCount.push(partyList.filter(x => x==parties[i]).length);
    };

    const labelsGraficSunburst = [].concat(parties);
    const parentsGraficSunburst = [];
    const valuesGraficSunburst = [].concat(partiesCount);

    for (var s = 0; s < parties.length; ++s) {
        parentsGraficSunburst.push("");
    };

    for (var s = 0; s < Object.keys(deputadosEmExercicio.nome).length; ++s) {
        let name = deputadosEmExercicio.nome[s];
        let party = deputadosEmExercicio.siglaPartido[s];
        labelsGraficSunburst.push(name);
        parentsGraficSunburst.push(party);
        valuesGraficSunburst.push(1);
    };

    // console.log("-----------------------------------------")
    // console.log(labelsGraficSunburst);
    // console.log(parentsGraficSunburst);
    // console.log(valuesGraficSunburst);
    // console.log("-----------------------------------------")

    return (
        <div className='containerDepByPartyScreen'>
            <div className='headerDeputiesByParty'>
                <h1>Deputados por Partido</h1>
            </div>
            <div className='divViewChoiceDeputiesByParty'>
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
                        <div className="headerGraficBallsDeputiesByParty">
                            <h2>Partido</h2>
                            <h2>Deputados eleitos</h2>
                        </div>
                    </div>
                    <div className='graficBallsDeputiesByParty'>
                        {parties.map((party, i) => (
                            <div className="partyDeputiesByPartyScreen" key={i}>
                                <div className='partyNameDeputiesByPartyScreen'>
                                    <h2>{party}</h2>
                                </div>
                                <div className='divBallsDeputiesByParty'>
                                    <Ball
                                        amount={partiesCount[i]}
                                        color='rgba(55,128,191,0.6)'
                                    />
                                    <p>{partiesCount[i]}</p>
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
                                    values: partiesCount,
                                    labels: parties,
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
                <div className="graficDeputiesByParty">
                    <div>
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
                                    margin: {"t": 80, "b": 50, "l": 110, "r": 10},
                                    showticklabels: true
                                }
                            } 
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default DeputiesByPartyScreen