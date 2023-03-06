import React from 'react';
import './styles.css';

const BoardDirectorsSenateScreen = ({ mesaDiretoraSenado }) => {
    console.log("Mesa diretora senado")
    console.log(Object.keys(mesaDiretoraSenado.NomeParlamentar).length)

    const presidents = [];
    const secretaries = [];
    const substitutes = [];

    for (var d = 0; d < Object.keys(mesaDiretoraSenado.NomeParlamentar).length; ++d) {
        const name = mesaDiretoraSenado.NomeParlamentar[d];
        const party = mesaDiretoraSenado.Partido[d];
        const UF = mesaDiretoraSenado.UF[d];
        const title = mesaDiretoraSenado.Cargo[d];

        if (title.includes("PRESIDENTE")) {
            presidents.push(
                {
                    "name": name,
                    "party" : party,
                    "UF" : UF,
                    "title" : title,
                }
            )

        } else if (title.includes("SUPLENTE")) {
            substitutes.push(
                {
                    "name": name,
                    "party" : party,
                    "UF" : UF,
                    "title" : title,
                }
            )

        } else {
            secretaries.push(
                {
                    "name": name,
                    "party" : party,
                    "UF" : UF,
                    "title" : title,
                }
            )
        }
    };

    console.log(presidents)
    console.log(presidents[0].name.replace('Senador ', ''))

    return (
        <div className='containerBoardDirectorsSenateScreen'>
            <div className='headerBoardDirectorsSenateScreen'>
                <h1>Mesa Diretora do Senado</h1>
            </div>
            <h2 className='subHeaderBoardDirectorsSenateScreen'>Presidente</h2>
            <div className="presidentAndViceDivBoardDirectorsSenateScreen">
                <div className='boxDivBoardDirectorsSenateScreen'>
                    <div className='senatorPictureBoardDirectorsChamberScreen'>
                        <img src={require(`../../data/pictures/senatorsPictures/${presidents[0].name.replace('Senador ', '')}.jpg`)} />
                    </div>
                    <div className='senatorInfoBoardDirectorsChamberScreen'>
                        <h4>Nome: {presidents[0].name}</h4>
                        <h5>Partido: {presidents[0].party}</h5>
                        <h5>UF: {presidents[0].UF}</h5>
                        <h5>Título: {presidents[0].title}</h5>
                    </div>
                </div>
            </div>
            <h2 className='subHeaderBoardDirectorsSenateScreen'>Vice-Presidentes</h2>
            <div className="presidentAndViceDivBoardDirectorsSenateScreen">
                {presidents.map((sen) => {
                    if (sen.title !== "PRESIDENTE") return (
                        <div className='boxDivBoardDirectorsSenateScreen'>
                            <div className='senatorPictureBoardDirectorsChamberScreen'>
                                <img src={require(`../../data/pictures/senatorsPictures/${sen.name.replace('Senador ', '')}.jpg`)} />
                            </div>
                            <div className='senatorInfoBoardDirectorsChamberScreen'>
                                <h4>Nome: {sen.name}</h4>
                                <h5>Partido: {sen.party}</h5>
                                <h5>UF: {sen.UF}</h5>
                                <h5>Título: {sen.title}</h5>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div>
                <h2 className='subHeaderBoardDirectorsSenateScreen'>Secretários</h2>
                <div className="boxDivSecretariesBoardDirectorsSenateScreen">
                    {secretaries.map((sen, i) => {
                        if (i <= 1) return (
                            <div className='boxDivBoardDirectorsSenateScreen'>
                                <div className='senatorPictureBoardDirectorsChamberScreen'>
                                    <img src={require(`../../data/pictures/senatorsPictures/${sen.name.replace('Senador ', '')}.jpg`)} />
                                </div>
                                <div className='senatorInfoBoardDirectorsChamberScreen'>
                                    <h4>Nome: {sen.name}</h4>
                                    <h5>Partido: {sen.party}</h5>
                                    <h5>UF: {sen.UF}</h5>
                                    <h5>Título: {sen.title}</h5>
                                </div>
                            </div>
                        )}
                    )}
                </div>
                <div className="boxDivSecretariesBoardDirectorsSenateScreen">
                    {secretaries.map((sen, i) => {
                        if (i > 1) return (
                            <div className='boxDivBoardDirectorsSenateScreen'>
                                <div className='senatorPictureBoardDirectorsChamberScreen'>
                                    <img src={require(`../../data/pictures/senatorsPictures/${sen.name.replace('Senador ', '')}.jpg`)} />
                                </div>
                                <div className='senatorInfoBoardDirectorsChamberScreen'>
                                    <h4>Nome: {sen.name}</h4>
                                    <h5>Partido: {sen.party}</h5>
                                    <h5>UF: {sen.UF}</h5>
                                    <h5>Título: {sen.title}</h5>
                                </div>
                            </div>
                        )}
                    )}
                </div>
            </div>
            <div>
                <h2 className='subHeaderBoardDirectorsSenateScreen'>Suplentes de Secretários</h2>
                <div className="boxDivSecretariesBoardDirectorsSenateScreen">
                    {substitutes.map((sen, i) => {
                        if (i <= 1) return (
                            <div className='boxDivBoardDirectorsSenateScreen'>
                                <div className='senatorPictureBoardDirectorsChamberScreen'>
                                    {/* <img src={require(`../../data/pictures/senatorsPictures/${sen.name.replace('Senador ', '')}.jpg`)} /> */}
                                </div>
                                <div className='senatorInfoBoardDirectorsChamberScreen'>
                                    <h4>Nome: {sen.name}</h4>
                                    <h5>Partido: {sen.party}</h5>
                                    <h5>UF: {sen.UF}</h5>
                                    <h5>Título: {sen.title}</h5>
                                </div>
                            </div>
                        )}
                    )}
                </div>
                <div className="boxDivSecretariesBoardDirectorsSenateScreen">
                    {substitutes.map((sen, i) => {
                        if (i > 1) return (
                            <div className='boxDivBoardDirectorsSenateScreen'>
                                <div className='senatorPictureBoardDirectorsChamberScreen'>
                                    {/* <img src={require(`../../data/pictures/senatorsPictures/${sen.name.replace('Senador ', '')}.jpg`)} /> */}
                                </div>
                                <div className='senatorInfoBoardDirectorsChamberScreen'>
                                    <h4>Nome: {sen.name}</h4>
                                    <h5>Partido: {sen.party}</h5>
                                    <h5>UF: {sen.UF}</h5>
                                    <h5>Título: {sen.title}</h5>
                                </div>
                            </div>
                        )}
                    )}
                </div>
            </div>
        </div>
    )
}

export default BoardDirectorsSenateScreen