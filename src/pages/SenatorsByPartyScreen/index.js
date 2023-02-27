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
    console.log(senatorsData)
    console.log(senatorsData.NomeParlamentar)
    console.log(senatorsData.SiglaPartidoParlamentar)

    const onlyUnique = (value, index, array) => {
        return array.indexOf(value) === index;
    };

    const parties = senatorsData.SiglaPartidoParlamentar.filter(onlyUnique);
    console.log(parties);
    
    const partiesCount = [];
    for (var i = 0; i < parties.length; ++i) {
        partiesCount.push(senatorsData.SiglaPartidoParlamentar.filter(x => x==parties[i]).length);
        // partiesCount.push(0);
        
        // for (var e = 0; e < senatorsData.SiglaPartidoParlamentar.length; ++e) {
        //     if (senatorsData.SiglaPartidoParlamentar[e] === parties[i]) {
        //         partiesCount[i]++;
        //     }
        // };
    };
    console.log(partiesCount);

    return (
        <div className='containerSenatorsByParty'>
            <div className='headerSenatorsByParty'>
                <h1>Senadores por Partido</h1>
            </div>
            <div className='divViewChoiceSenatorsByParty'>
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
                        <div className="headerGraficBallsSenatorsByParty">
                            <h2>Partido</h2>
                            <h2>Senadores eleitos</h2>
                        </div>
                    </div>
                    <div className='graficBallsSenatorsByParty'>
                        {parties.map((party, i) => (
                            <div className="partySenatorsByPartyScreen">
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
                <div className="graficSenatorsByParty">
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

export default SenatorsByPartyScreen