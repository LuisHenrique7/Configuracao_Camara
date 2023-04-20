import React from 'react';
import { useState } from 'react';

import Plot from 'react-plotly.js';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import "./styles.css";

import Ball from '../../components/Ball';

const SenatorsByPartyScreen = ({ senatorsData }) => {
    const [valueVisualization, setValueVisualization] = useState(0);
    const handleChangeValueVisualization = (event, newValueVisualization) => {
        setValueVisualization(newValueVisualization);
    };
    // console.log(senatorsData)
    // console.log(senatorsData.NomeParlamentar)
    // console.log(senatorsData.SiglaPartidoParlamentar)

    const onlyUnique = (value, index, array) => {
        return array.indexOf(value) === index;
    };

    const partyList = []
    for (var i = 0; i < Object.keys(senatorsData.SiglaPartidoParlamentar).length; ++i) {
        partyList.push(senatorsData.SiglaPartidoParlamentar[i])
    };

    const parties = partyList.filter(onlyUnique);
    // console.log(parties);
    
    const partiesCount = [];
    for (var i = 0; i < parties.length; ++i) {
        partiesCount.push(partyList.filter(x => x===parties[i]).length);
        // partiesCount.push(0);
        
        // for (var e = 0; e < senatorsData.SiglaPartidoParlamentar.length; ++e) {
        //     if (senatorsData.SiglaPartidoParlamentar[e] === parties[i]) {
        //         partiesCount[i]++;
        //     }
        // };
    };
    // console.log(partiesCount);

    const labelsGraficSunburst = [].concat(parties);
    const parentsGraficSunburst = [];
    const valuesGraficSunburst = [].concat(partiesCount);

    for (var s = 0; s < parties.length; ++s) {
        parentsGraficSunburst.push("");
    };

    for (var s = 0; s < Object.keys(senatorsData.NomeParlamentar).length; ++s) {
        let name = senatorsData.NomeParlamentar[s];
        let party = senatorsData.SiglaPartidoParlamentar[s];
        labelsGraficSunburst.push(name);
        parentsGraficSunburst.push(party);
        valuesGraficSunburst.push(1);
    };

    return (
        <div className='containerSenatorsByParty'>
            <div className='headerSenatorsByParty'>
                <h1>Senadores por Partido</h1>
            </div>
            <div className='divViewChoiceSenatorsByParty'>
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
                        <div className="headerGraficBallsSenatorsByParty">
                            <h2>Partido</h2>
                            <h2>Senadores eleitos</h2>
                        </div>
                    </div>
                    <div className='graficBallsSenatorsByParty'>
                        {parties.map((party, i) => (
                            <div className="partySenatorsByPartyScreen" key={i}>
                                <div className='partyNameSenatorsByPartyScreen'>
                                    <h2>{party}</h2>
                                </div>
                                <div className='divBallsSenatorsByParty'>
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
                                    title: "Percentagem de Senadores eleitos por Partido",
                                    height: 800,
                                    width: 800,
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
                                title: "Senadores eleitos por Partido",
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
                <div className="graficSenatorsByParty">
                    <div>
                        <Plot
                            data = {[
                                {
                                    type: "bar",
                                    x: partiesCount,
                                    y: parties,
                                    orientation: "h",
                                }
                            ]}
                            layout = {
                                {
                                    title: "Quantidades de Senadores eleitos por Partido",
                                    showgrid: true,
                                    width: 700,
                                    height: 700,
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

export default SenatorsByPartyScreen