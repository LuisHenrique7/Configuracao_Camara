import React from 'react';
import Plot from 'react-plotly.js';

import "./styles.css";

const SenatorsByPartyScreen = ({ senatorsData }) => {
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
            <h1>Senadores por Partido</h1>
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
        </div>
    )
}

export default SenatorsByPartyScreen