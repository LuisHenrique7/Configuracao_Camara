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
                        <p>Nome: {presidents[0].name}</p>
                        <p>Partido: {presidents[0].party}</p>
                        <p>UF: {presidents[0].UF}</p>
                        <p>Título: {presidents[0].title}</p>
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
                                <p>Nome: {sen.name}</p>
                                <p>Partido: {sen.party}</p>
                                <p>UF: {sen.UF}</p>
                                <p>Título: {sen.title}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div>
                <h2 className='subHeaderBoardDirectorsSenateScreen'>Secretários</h2>
                <div className="boxDivSecretariesBoardDirectorsSenateScreen">
                    {secretaries.map((sen) => (
                        <div className='boxDivBoardDirectorsSenateScreen'>
                            <div className='senatorPictureBoardDirectorsChamberScreen'>
                                <img src={require(`../../data/pictures/senatorsPictures/${sen.name.replace('Senador ', '')}.jpg`)} />
                            </div>
                            <div className='senatorInfoBoardDirectorsChamberScreen'>
                                <p>Nome: {sen.name}</p>
                                <p>Partido: {sen.party}</p>
                                <p>UF: {sen.UF}</p>
                                <p>Título: {sen.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2 className='subHeaderBoardDirectorsSenateScreen'>Suplentes de Secretários</h2>
                <div className="boxDivSecretariesBoardDirectorsSenateScreen">
                    {substitutes.map((sen) => (
                        <div className='boxDivBoardDirectorsSenateScreen'>
                            <div className='senatorPictureBoardDirectorsChamberScreen'>
                                {/* <img src={require(`../../data/pictures/senatorsPictures/${sen.name.replace('Senador ', '')}.jpg`)} /> */}
                            </div>
                            <div className='senatorInfoBoardDirectorsChamberScreen'>
                                <p>Nome: {sen.name}</p>
                                <p>Partido: {sen.party}</p>
                                <p>UF: {sen.UF}</p>
                                <p>Título: {sen.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BoardDirectorsSenateScreen