import React from 'react';
import Plot from 'react-plotly.js';

import './styles.css';

import Ball from '../../components/Ball';

const MainScreen = () => {
    const states = ['Estado 1', 'Estado 2', 'Estado 3', 'Estado 4'];
    const deputiesNumber = [2, 1, 4, 2];

    const labelsGraficSunburst = ['Estado 1', 'Estado 2', 'Estado 3', 'Estado 4',
                                    'Deputado 1', 'Deputado 2', 'Deputado 3', 'Deputado 4',
                                    'Deputado 5', 'Deputado 6', 'Deputado 7', 'Deputado 8', 'Deputado 9'
                                ];

    const parentsGraficSunburst = ['', '', '', '', 'Estado 1', 'Estado 1',
                                    'Estado 2', 'Estado 3', 'Estado 3', 'Estado 3', 'Estado 3',
                                    'Estado 4', 'Estado 4',
                                ];
    const valuesGraficSunburst = [2, 1, 4, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1];

    return (
        <div className="container-main">
            <div className='headerMainScreen'>
                <h1>Veja os dados de Deputados e Senadores</h1>
            </div>
            <div style={{backgroundColor: '#FFF', padding: '20px', marginBottom: '30px'}}>
                <h3>Os dados estão exibidos através de diferentes formas de visualização.<br/>Abaixo estão alguns exemplos:</h3>
            </div>
            <div className='divExamplesMainScreen'>
                <div
                    style={
                        window.innerWidth >= 710 ? 
                            {display: 'flex', justifyContent:'center'} : 
                            {display: 'flex', justifyContent:'center', flexWrap: 'wrap', marginBottom: '80px'}
                    }
                >
                    <div
                        style={
                            window.innerWidth >= 710 ? 
                                {
                                    border: '1px solid',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '60%',
                                    backgroundColor: '#2f7958',
                                    margin: '20px 0px',
                                } :
                                {border: '1px solid', borderRadius: '10px', display: 'flex',
                                flexDirection: 'column', width: '100%',
                                backgroundColor: '#2f7958', margin: '20px 0px'
                                }
                        }
                    >
                        <div className="headerGraficBallsMainScreen">
                            <div style={{width: '90%', display:'flex', justifyContent: 'space-around', marginLeft: '-30px'}}>
                                <h2>Estado</h2>
                                <h2>Deputados eleitos</h2>
                            </div>
                        </div>
                        <div className='graficBallsMainScreen'>
                            {states.map((state, i) => (
                                <div className="partyMainScreen" key={i}>
                                    <div className='partyNameMainScreen'>
                                        <h2>{state}</h2>
                                    </div>
                                    <div className='divBallsMainScreen'>
                                        <Ball
                                            amount={deputiesNumber[i]}
                                            color='rgba(55,128,191,0.6)'
                                        />
                                        <p>{deputiesNumber[i]}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div
                        style={
                            window.innerWidth >= 710 ? 
                                {width: '30%', textAlign:'left', display: 'flex', alignItems: 'center', marginLeft: '10px'} : 
                                {width: '100%', textAlign:'left', display: 'flex', alignItems: 'center', marginLeft: '10px'}
                        }
                    >
                        <h3>A exibição com bolinhas traz uma representação com círculos para demostrar quantidade.</h3>
                    </div>
                </div>

                <div
                    style={
                        window.innerWidth >= 710 ? 
                        {display: 'flex', justifyContent:'center', flexDirection: 'row', margin: '30px auto'} :
                        {display: 'flex', justifyContent:'center', flexDirection: 'row', margin: '30px auto', flexWrap:'wrap', marginBottom: '80px'}
                }
                >
                    <div>
                        <Plot
                            data = {[
                                {
                                    type: "pie",
                                    values: deputiesNumber,
                                    labels: states,
                                    textinfo: "label+percent",
                                    textposition: "inside",
                                    automargin: true,
                                }
                            ]}
                              
                            layout = {
                                {
                                    title: "Percentagem de Deputados eleitos por Estado",
                                    height: 500,
                                    width: 500,
                                    margin: {"t": 50, "b": 50, "l": 50, "r": 50},
                                    showlegend: false,
                                }
                            }
                           
                        />
                    </div>
                    <div
                        style={
                            window.innerWidth >= 710 ? 
                                {width: '30%', textAlign:'left', display: 'flex', alignItems: 'center', marginLeft: '10px'} :
                                {marginTop: '10px', width: '100%', textAlign:'left', display: 'flex', alignItems: 'center', marginLeft: '10px'}
                        }
                    >
                        <h3>O gráfico de Pizza demostra a percentagem de cada "fatia" quanto ao todo.</h3>
                    </div>
                </div>

                <div
                    style={
                        window.innerWidth >= 710 ? 
                        {display: 'flex', justifyContent:'center', flexDirection: 'row', margin: '30px auto'} :
                        {display: 'flex', justifyContent:'center', flexDirection: 'row', margin: '30px auto', flexWrap:'wrap', marginBottom: '80px'}
                    }
                >
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
                                height: 500,
                                width: 500,
                                margin: {"t": 50, "b": 50, "l": 50, "r": 50},
                                showlegend: false,
                            }
                        }
                        
                    />
                    <div
                        style={
                            window.innerWidth >= 710 ? 
                            {width: '30%', textAlign:'left', display: 'flex', justifyContent: 'space-evenly', marginLeft: '10px', flexDirection: 'column'} :
                            {marginTop: '10px', width: '100%', textAlign:'left', display: 'flex', justifyContent: 'space-evenly', marginLeft: '10px', flexDirection: 'column'}
                        }
                    >
                        <h3>O gráfico de Sunburst é parecido com o de Pizza. Ambos mostram a relação de cada parte em relação ao todo.</h3>
                        <h3>Porém com o gráfico de Sunburst é possível observar os itens internos de cada parte.</h3>
                        <h3>Clique em um dos Estados para ampliar seus itens e observar os deputados daquele Estado. Para retornar a visualização geral clique novamente no estado.</h3>
                    </div>
                </div>

                <div
                    style={
                        window.innerWidth >= 710 ? 
                        {display: 'flex', justifyContent:'center', flexDirection: 'row', margin: '30px auto'} :
                        {display: 'flex', justifyContent:'center', flexDirection: 'row', margin: '30px auto', flexWrap:'wrap', marginBottom: '80px'}
                    }
                >
                    <Plot
                        data = {[
                            {
                                type: "bar",
                                x: deputiesNumber,
                                y: states,
                                orientation: "h",
                            }
                        ]}
                        layout = {
                            {
                                title: "Quantidades de Deputados eleitos por Estado",
                                showgrid: true,
                                margin: {"t": 80, "b": 50, "l": 110, "r": 10},
                                height: 500,
                                width: 500
                            }
                        } 
                    />
                    <div
                        style={
                            window.innerWidth >= 710 ?
                                {width: '30%', textAlign:'left', display: 'flex', alignItems: 'center', marginLeft: '10px'} :
                                {marginTop: '10px', width: '100%', textAlign:'left', display: 'flex', alignItems: 'center', marginLeft: '10px'}
                        }
                    >
                        <h3>O tradicional gráfico de barras também está presente entre as opções de visualização. 
                            Você pode clicar sobre o gráfico e selecionar uma área na qual deseja ampliar a visualização. 
                            Clique 2 vezes sobre o gráfico para retornar a exibição inicial caso tenha aplicado alguma mudança 
                            como o uso do zoom.
                        </h3>
                    </div>
                </div>
            </div>
            <div className='divAboutMainScreen'>
                <h2>Sobre:</h2>
                <div>
                    <h3>Prometeu:</h3>
                    <p>É uma base de aplicações voltadas a divulgação de dados dos membros do governo brasileiro.</p>
                </div>
                <div>
                    <h3>Configuração do Congresso:</h3>
                    <p>É uma aplicação de visualização da organização atual do Congresso Nacional.</p>
                    <p>Seu objetivo é prover a população brasileira uma forma de visualizar como estão distribuídos os cargos de deputados e senadores por Estado e Partido.</p>
                    <p>Na aplicação também é possível ver individualmente cada deputado e senador, seus emails e outras informações. Há informações sobre as composições das mesas diretoras da Câmara dos Deputados e do Senado Federal. Além de exibições comparativas da configuração atual da Câmara com sua configuração na eleição passada.</p>
                </div>
            </div>
            <div className='divDataSourceMainScreen'>
                <h2>Fontes dos Dados:</h2>
                <div>
                    <h4>Portal da Câmara dos Deputados</h4>
                    <p>https://www.camara.leg.br/</p>
                </div>
                <div>
                    <h4>Dados Abertos da Câmara dos Deputados</h4>
                    <p>https://dadosabertos.camara.leg.br/</p>
                </div>
                <div>
                    <h4>Tamanho das Bancadas na Eleição - Portal da Câmara dos Deputados</h4>
                    <p>https://www.camara.leg.br/deputados/bancada-na-eleicao</p>
                </div>
                <div>
                    <h4>Bancadas na Eleição - Portal da Câmara dos Deputados</h4>
                    <p>https://www.camara.leg.br/deputados/bancada-eleicoes-anteriores</p>
                </div>
                <div>
                    <h4>Senado Federal</h4>
                    <p>https://www12.senado.leg.br/hpsenado</p>
                </div>
                <div>
                    <h4>Dados Abertos - Senado Federal</h4>
                    <p>https://www12.senado.leg.br/dados-abertos</p>
                </div>
            </div>

            <div style={
                {
                    display: 'flex', flexDirection: 'row',
                    backgroundColor: 'silver', width: '100%',
                    marginTop: '60px', padding: '50px 0px',
                    justifyContent: 'space-between', alignItems: 'center',
                    
                }
            }>
                <h3 style={{marginLeft: '20px'}}><strong>Universidade Federal de Sergipe</strong></h3>
                <div style={{margin: '0px 20px'}}>
                    <h3>
                    <strong>Autores:</strong>
                    <h3>Luis Henrique Santos Nascimento</h3>
                    <h3 style={{marginTop: '10px'}}>Hendrik Teixeira Macedo</h3>
                    </h3>
                </div>
                <h3 style={{marginRight: '20px'}}>2023</h3>
            </div>
        </div>
    )
}

export default MainScreen