import React from 'react';
//styles
import './styles.css';

// components
import DrawerButton from '../DrawerButton';

const buttonsName = ["Tela Inicial", "Teste", "Deputados", "Deputados por Estado", "Deputados por Partido", "Configurações por Eleição"];

const Drawer = ({ goToMainScreen, goToTestScreen, goToDeputiesListScreen, goToDeputiesByStateScreen, goToDeputiesByPartyScreen, goToComparisonSetupDeputiesScreen }) => {
  return (
    <div className='drawerContainer'>
      <div>
        <h2>Drawer</h2>
        <DrawerButton
          goToPage={goToMainScreen}
          text={buttonsName[0]}
        />
        <DrawerButton
          goToPage={goToTestScreen}
          text={buttonsName[1]}
        />
        <DrawerButton
          goToPage={goToDeputiesListScreen}
          text={buttonsName[2]}
        />
        <DrawerButton
          goToPage={goToDeputiesByStateScreen}
          text={buttonsName[3]}
        />
        <DrawerButton
          goToPage={goToDeputiesByPartyScreen}
          text={buttonsName[4]}
        />
        <DrawerButton
          goToPage={goToComparisonSetupDeputiesScreen}
          text={buttonsName[5]}
        />
      </div>
    </div>
  )
}

export default Drawer