import React from 'react';
import Plot from 'react-plotly.js';
import Ball from '../../components/Ball';
import './styles.css';

const ComparisonSetupDeputiesScreen = ({ deputadosPorPartido }) => {
  return (
    <div className='containerComparisonSetupDeputiesScreen'>
        <h1>Comparação entre as configurações da Câmara</h1>
        <div className="headerGraficBallsComparisonSetupDep">
            <h2>Partido</h2>
            <h2>Deputados eleitos em 2018</h2>
            <h2>Deputados eleitos em 2022</h2>
        </div>
        <div className='graficBallsComparisonSetupDep'>
            {deputadosPorPartido.parties.map((party, i) => (
                <div className="partyComparisonSetupDeputiesScreen">
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
            {/* <div className="party">
                <div className='partyName'>
                    <h2>{deputadosPorPartido.parties[0]}</h2>
                    <p>Saldo: {deputadosPorPartido.deputies2022[0] - deputadosPorPartido.deputies2018[0]}</p>
                </div>
                <div className='divBallsDeputies'>
                    <Ball amount={deputadosPorPartido.deputies2018[0]}/>
                    <p>{deputadosPorPartido.deputies2018[0]}</p>
                </div>
                <div className='divBallsDeputies'>
                    <Ball amount={deputadosPorPartido.deputies2022[0]}/>
                    <p>{deputadosPorPartido.deputies2022[0]}</p>
                </div>
            </div>
            <div className="party">
            <div className='partyName'>
                    <h2>{deputadosPorPartido.parties[1]}</h2>
                    <p>Saldo: {deputadosPorPartido.deputies2022[1] - deputadosPorPartido.deputies2018[1]}</p>
                </div>
                <div className='divBallsDeputies'>
                    <Ball amount={deputadosPorPartido.deputies2018[1]}/>
                    <p>{deputadosPorPartido.deputies2018[1]}</p>
                </div>
                <div className='divBallsDeputies'>
                    <Ball amount={deputadosPorPartido.deputies2022[1]}/>
                    <p>{deputadosPorPartido.deputies2022[1]}</p>
                </div>
            </div> */}
        </div>
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
                        margin: {"t": 50, "b": 50, "l": 110, "r": 10},
                        showticklabels: true,
                        height: 1000,
                        barmode: 'group',
                    }
                } 
            />
        </div>
    </div>
  )
}

export default ComparisonSetupDeputiesScreen