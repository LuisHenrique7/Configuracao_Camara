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
import { deputadosEmExercicio } from './data/deputadosEmExercicio';
import { senadoresEmExercicio } from './data/senadoresEmExercicio';
import { mesaDiretoraCamara } from './data/mesaDiretoraCamara';
import { mesaDiretoraSenado } from './data/mesaDiretoraSenado';
import { frentesDeputados } from './data/frentesDeputados';
import { deputadosMembrosFrentes } from './data/deputadosMembrosFrentes';

// pages
import MainScreen from './pages/MainScreen';
import DeputiesByStateScreen from './pages/DeputiesByStateScreen';
import DeputiesByPartyScreen from './pages/DeputiesByPartyScreen';
import ComparisonSetupDeputiesScreen from './pages/ComparisonSetupDeputiesScreen';
import DeputiesListScreen from './pages/DeputiesListScreen';
import DeputiesScreen from './pages/DeputiesScreen';
import SenatorsListScreen from './pages/SenatorsListScreen';
import MyDrawer from './components/MyDrawer';
import BoardDirectorsChamberScreen from './pages/BoardDirectorsChamberScreen';
import SenatorsByPartyScreen from './pages/SenatorsByPartyScreen';
import BoardDirectorsSenateScreen from './pages/BoardDirectorsSenateScreen';
import SenatorScreen from './pages/SenatorScreen';
import SenatorsByStateScreen from './pages/SenatorsByStateScreen';
import GroupDeputiesScreen from './pages/GroupDeputiesScreen';
import ParliamentaryGroupScreen from './pages/ParliamentaryGroupScreen';



function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <MyDrawer>
          <Routes>
            <Route path="/" element={<MainScreen />} />
            <Route path="listaDeputados" element={
              <DeputiesListScreen
                deputadosEmExercicio={deputadosEmExercicio}
              />}
            />
            <Route path="listaDeputados/deputado/:id" element={
              <DeputiesScreen
                deputadosEmExercicio={deputadosEmExercicio}
              />}
            />
            <Route path="mesaDiretoraCamara" element={
              <BoardDirectorsChamberScreen
                mesaDiretoraCamara={mesaDiretoraCamara}
              />}
            />
            <Route path="deputadosPorEstado" element={
              <DeputiesByStateScreen
                proporcaoDeputadosPorEstado={proporcaoDeputadosPorEstado}
                deputadosEmExercicio={deputadosEmExercicio}
              />}
            />
            <Route path="deputadosPorPartido" element={
              <DeputiesByPartyScreen
                deputadosPorPartido={deputadosPorPartido}
                deputadosEmExercicio={deputadosEmExercicio}
              />}
            />
            <Route path="ComparisonSetupDeputies" element={
              <ComparisonSetupDeputiesScreen
                deputadosPorPartido={deputadosPorPartido}
              />}
            />
            <Route path="frentesDeputados" element={
              <GroupDeputiesScreen
                frentesDeputados={frentesDeputados}
              />}
            />
            <Route path="frentesDeputados/frente/:id" element={
              <ParliamentaryGroupScreen
                deputadosMembrosFrentes={deputadosMembrosFrentes}
                frentesDeputados={frentesDeputados}
              />}
            />
            <Route path="listaSenadores" element={
              <SenatorsListScreen
                senadoresEmExercicio={senadoresEmExercicio}
              />}
            />
            <Route path="mesaDiretoraSenado" element={
              <BoardDirectorsSenateScreen
                mesaDiretoraSenado={mesaDiretoraSenado}
              />}
            />
            <Route path="senadoresPorEstado" element={
              <SenatorsByStateScreen
                senatorsData={senadoresEmExercicio}
              />}
            />
            <Route path="senadoresPorPartido" element={
              <SenatorsByPartyScreen
                senatorsData={senadoresEmExercicio}
              />}
            />
            <Route path="listaSenadores/senador/:id" element={
              <SenatorScreen
                senadoresEmExercicio={senadoresEmExercicio}
              />}
            />
          </Routes>
        </MyDrawer> 
      </BrowserRouter> 
    </div>
  );
}

export default App;
