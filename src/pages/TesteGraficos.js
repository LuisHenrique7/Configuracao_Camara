import React from 'react';
import Plot from 'react-plotly.js';
import MyAppBar from '../components/MyAppBar';
import MyDrawer from '../components/MyDrawer';

const TesteGraficos = ({ goToMainScreen, goToDeputiesByStateScreen }) => {
  return (
    <div>
        {/* <MyAppBar /> */}
        {/* <MyDrawer /> */}
        <h1>Teste Graficos</h1>
        <Plot
            data={[
            {
                x: [1, 2, 3],
                y: [2, 6, 3],
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'red'},
            },
            {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
            ]}
            layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
        />
        <Plot
            data = {[
                {
                    type: "pie",
                    values: [2, 3, 4, 4],
                    labels: ["Wages", "Operating expenses", "Cost of sales", "Insurance"],
                    textinfo: "label+percent",
                    textposition: "outside",
                    automargin: true
                }
            ]}
            layout = {
                {
                    height: 400,
                    width: 400,
                    margin: {"t": 0, "b": 0, "l": 0, "r": 0},
                    showlegend: false
                }
            }
        />
        <div className="buttons">
            <button onClick={goToMainScreen}>Tela Principal</button>
            <button onClick={goToDeputiesByStateScreen}>Deputados por Estado</button>
        </div>
    </div>
  )
}

export default TesteGraficos