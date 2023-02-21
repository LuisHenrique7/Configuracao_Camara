import './App.css';

// React
import { useState } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// data
import { proporcaoDeputadosPorEstado } from './data/proporcaoDeputadosPorEstado';
import { deputadosPorPartido } from './data/deputadosPorPartido';
import { senadoresEmExercicio } from './data/senadoresEmExercicio';
import { mesaDiretoraCamara } from './data/mesaDiretoraCamara';

// pages
import TesteGraficos from './pages/TesteGraficos';
import MainScreen from './pages/MainScreen';
import DeputiesByStateScreen from './pages/DeputiesByStateScreen';
import DeputiesByPartyScreen from './pages/DeputiesByPartyScreen';
import ComparisonSetupDeputiesScreen from './pages/ComparisonSetupDeputiesScreen';
import Drawer from './components/Drawer';
import DeputiesListScreen from './pages/DeputiesListScreen';
import DeputiesScreen from './pages/DeputiesScreen';
import SenatorsListScreen from './pages/SenatorsListScreen';
import MyDrawer from './components/MyDrawer';
import BoardDirectorsChamberScreen from './pages/BoardDirectorsChamberScreen';
import SenatorsByPartyScreen from './pages/SenatorsByPartyScreen';

const stages = [
  { id: 1, name: "main" },
  { id: 2, name: "testeGrafico" },
  { id: 3, name: "deputiesList" },
  { id: 4, name: "deputiesByState" },
  { id: 5, name: "deputiesByParty" },
  { id: 6, name: "comparisonSetupDeputies" }
];

function App() {
  const [appStage, setAppStage] = useState(stages[0].name);

  const goToMainScreen = () => {
    setAppStage(stages[0].name);
  };

  const goToTestScreen = () => {
    setAppStage(stages[1].name);
  };

  const goToDeputiesListScreen = () => {
    setAppStage(stages[2].name);
  };

  const goToDeputiesByStateScreen = () => {
    setAppStage(stages[3].name);
  };

  const goToDeputiesByPartyScreen = () => {
    setAppStage(stages[4].name);
  };

  const goToComparisonSetupDeputiesScreen = () => {
    setAppStage(stages[5].name);
  };
  
  // const teste = (time) => {
  //   let rows = []
  //   for (let i = 0; i < time; i++) {
  //     rows.push(<h4 key={i}>a</h4>)
  //   }

  //   return rows;
  // };

  return (
    <div className="App">
      <BrowserRouter>
        <MyDrawer
          goToMainScreen={goToMainScreen}
          goToTestScreen={goToTestScreen}
          goToDeputiesListScreen={goToDeputiesListScreen}
          goToDeputiesByStateScreen={goToDeputiesByStateScreen}
          goToDeputiesByPartyScreen={goToDeputiesByPartyScreen}
          goToComparisonSetupDeputiesScreen={goToComparisonSetupDeputiesScreen}
        />

        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="listaDeputados" element={<DeputiesListScreen />} />
          <Route path="deputadosPorEstado" element={
            <DeputiesByStateScreen
              proporcaoDeputadosPorEstado={proporcaoDeputadosPorEstado}
            />}
          />
          <Route path="mesaDiretoraCamara" element={
            <BoardDirectorsChamberScreen
              mesaDiretoraCamara={mesaDiretoraCamara}
            />}
          />
          <Route path="deputadosPorPartido" element={
            <DeputiesByPartyScreen
              deputadosPorPartido={deputadosPorPartido}
            />}
          />
          <Route path="ComparisonSetupDeputies" element={
            <ComparisonSetupDeputiesScreen
              deputadosPorPartido={deputadosPorPartido}
            />}
          />
          <Route path="listaSenadores" element={
            <SenatorsListScreen
              senadoresEmExercicio={senadoresEmExercicio}
            />}
          />
          <Route path="senadoresPorPartido" element={
            <SenatorsByPartyScreen
              senatorsData={senadoresEmExercicio}
            />}
          />
        </Routes>
      </BrowserRouter>
      {/* {proporcaoDeputadosPorEstado.deputies.map((dep, i) => (
                    <span key={i}>{dep}, </span>
      ))} */}
      {/* {proporcaoDeputadosPorEstado.deputies.map((letter, i) => {for (let e = 0; e < letter; e++) {
                    (<h5 key={i}>{letter}, </h5>)}}
      )} */}

      {/* <div style={{display: "flex", marginLeft: 50}}>
      {proporcaoDeputadosPorEstado.deputies.map((dep, i) => teste(dep))}
      </div> */}
{/*
      {appStage === "main" && (
        <SenatorsListScreen senadoresEmExercicio={senadoresEmExercicio}/>
        // <MainScreen
        //   goToTestScreen={goToTestScreen}
        //   goToDeputiesByStateScreen={goToDeputiesByStateScreen}
        //   goToDeputiesByPartyScreen={goToDeputiesByPartyScreen}
        //   goToComparisonSetupDeputiesScreen={goToComparisonSetupDeputiesScreen}
        // />
      )}
      {appStage === "testeGrafico" && (
        <TesteGraficos
        goToMainScreen={goToMainScreen}
        goToDeputiesByStateScreen={goToDeputiesByStateScreen}
        />
      )}
      {appStage === "deputiesList" && (<DeputiesListScreen />)}
      {appStage === "deputiesByState" && (
        <DeputiesByStateScreen
          proporcaoDeputadosPorEstado={proporcaoDeputadosPorEstado}
          goToMainScreen={goToMainScreen}
          goToDeputiesByPartyScreen={goToDeputiesByPartyScreen}
        />
      )}
      {appStage === "deputiesByParty" && (
        <DeputiesByPartyScreen
          deputadosPorPartido={deputadosPorPartido}
          goToMainScreen={goToMainScreen}
          goToDeputiesByStateScreen={goToDeputiesByStateScreen}
        />
      )}
      {appStage === "comparisonSetupDeputies" && (
        <ComparisonSetupDeputiesScreen
          deputadosPorPartido={deputadosPorPartido}
          goToMainScreen={goToMainScreen}
          goToDeputiesByStateScreen={goToDeputiesByStateScreen}
          goToDeputiesByPartyScreen={goToDeputiesByPartyScreen}
        />
      )}
*/} 
      
      
      
    </div>
  );
}

export default App;
