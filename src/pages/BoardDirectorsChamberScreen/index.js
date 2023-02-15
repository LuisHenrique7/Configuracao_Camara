import React from 'react';
import './styles.css';

const BoardDirectorsChamberScreen = ({ x }) => {
    return (
        <div className='containerBoardDirectorsChamberScreen'>
            <h1>BoardDirectorsChamberScreen</h1>
            <div className="presidentAndViceDivBoardDirectorsChamberScreen">
                <div className='boxDivBoardDirectorsChamberScreen'>
                    Presidente
                </div>
                <div className='boxDivBoardDirectorsChamberScreen'>
                    Vice Presidente
                </div>
            </div>
            <div className="blueSquare"><p>Informações sobre a aplicação</p></div>
        </div>
    )
}

export default BoardDirectorsChamberScreen