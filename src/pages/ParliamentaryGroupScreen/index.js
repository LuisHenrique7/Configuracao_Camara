import React from 'react';
import { useState } from "react";

import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './styles.css';

const ParliamentaryGroupScreen = ({ deputadosMembrosFrentes, frentesDeputados }) => {
  const { id } = useParams();
  const index = Object.keys(deputadosMembrosFrentes)[id];
  const coordinator = deputadosMembrosFrentes[index][0]
  const arrayMembers = deputadosMembrosFrentes[index].slice(1, deputadosMembrosFrentes[index].length)

  const [attribute, setAttribute] = useState('nome');
  // console.log(index);
  // console.log(deputadosMembrosFrentes[index]);
  // console.log(deputadosMembrosFrentes[index].length, arrayMembers.length)

  function compare( a, b ) {
    if ( a[attribute] < b[attribute] ){
      return -1;
    }
    if ( a[attribute] > b[attribute] ){
      return 1;
    }
    return 0;
  };

  arrayMembers.sort( compare );

  const handleChangeStateAttribute = (event) => {
    setAttribute(event.target.value);
  };

  return (
    <div className='containerParliamentaryGroupScreen'>
      <div className='headerParliamentaryGroupScreen'>
        <h1>Frente Parlamentar</h1>
      </div>

      <h2
        className='subHeaderParliamentaryGroupScreen'
        style={{width: '70%', borderRadius: '10px'}}
      >
        {frentesDeputados.titulo[id]}
      </h2>

      <div 
        style={{
            display: 'flex', width: '40%', flexDirection: 'row', justifyContent: 'center',
            marginTop: '30px', alignSelf: 'center', backgroundColor: '#FFF', padding: '20px 0px'
        }}
      >
        <div style={{display:'flex', width:'40%', minWidth: '90px'}}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Atributo de Ordenação</InputLabel>
            <Select
                value={attribute}
                label="Atributo de Ordenação"
                onChange={handleChangeStateAttribute}
            > 
              <MenuItem value={'nome'}>Nome</MenuItem>
              <MenuItem value={'siglaPartido'}>Partido</MenuItem>
              <MenuItem value={'siglaUf'}>Estado</MenuItem>
            </Select>
          </FormControl>
        </div>
        {/* <Button
            variant="contained"
            onClick={() => {arrayMembers.sort( compare )}}
            style={{marginLeft: '20px'}}
        >
          Ordenar
        </Button>   */}
      </div>

      <h2 className='subHeaderParliamentaryGroupScreen'>Coordenador(a)</h2>
      <div
        className='divMembersParliamentaryGroupScreen'
        style={window.innerWidth < 710 ? {width: '60%'} : {width: '40%'}}
      >
        <p style={{fontWeight: 'bold', color: '#0095da'}}>Nome: {coordinator['nome']}</p>
        <p>Partido: {coordinator['siglaPartido']}</p>
        <p>UF: {coordinator['siglaUf']}</p>
      </div>

      <h2 className='subHeaderParliamentaryGroupScreen'>Membros ({deputadosMembrosFrentes[index].length})</h2>
      <div className='divDisplayMembersParliamentaryGroupScreen'>
        {arrayMembers.map((dep, i) => {
          if (dep['nome'] !== null) return (
          <div
            className='divMembersParliamentaryGroupScreen'
            style={window.innerWidth < 710 ? {width: '45%'} : {}}
            key={i}
          >
            <p style={{fontWeight: 'bold', color: '#0095da'}}>Nome: {dep['nome']}</p>
            <p>Partido: {dep['siglaPartido']}</p>
            <p>UF: {dep['siglaUf']}</p>
          </div>
          )}
        )}
      </div>
    </div>
  )
}

export default ParliamentaryGroupScreen