import React from 'react';
import './styles.css';

const BoardDirectorsChamberScreen = ({ mesaDiretoraCamara }) => {
    console.log(Object.keys(mesaDiretoraCamara.nome).length);
    console.log(mesaDiretoraCamara.urlFoto[0].split('/').slice(-1)[0].split('.')[0]);
    console.log(mesaDiretoraCamara.urlFoto[0].split('/').pop().split('.')[0]);

    const presidents = [];
    const secretaries = [];
    const substitutes = [];

    for (var d = 0; d < Object.keys(mesaDiretoraCamara.nome).length; ++d) {
        const name = mesaDiretoraCamara.nome[d];
        const party = mesaDiretoraCamara.siglaPartido[d];
        const UF = mesaDiretoraCamara.siglaUf[d];
        const photo = mesaDiretoraCamara.urlFoto[d];
        const title = mesaDiretoraCamara.titulo[d];
        const id = mesaDiretoraCamara.urlFoto[d].split('/').pop().split('.')[0];

        if (title.includes("Presidente")) {
            presidents.push(
                {
                    "name": name,
                    "party" : party,
                    "UF" : UF,
                    "photo" : photo,
                    "title" : title,
                    "id" : id,
                }
            )

        } else if (title.includes("Suplente")) {
            substitutes.push(
                {
                    "name": name,
                    "party" : party,
                    "UF" : UF,
                    "photo" : photo,
                    "title" : title,
                    "id" : id,
                }
            )

        } else {
            secretaries.push(
                {
                    "name": name,
                    "party" : party,
                    "UF" : UF,
                    "photo" : photo,
                    "title" : title,
                    "id" : id,
                }
            )
        }
    };

    function compare( a, b ) {
        if ( a.title < b.title ){
          return -1;
        }
        if ( a.title > b.title ){
          return 1;
        }
        return 0;
    };
      
    presidents.sort( compare );
    secretaries.sort( compare );
    substitutes.sort( compare );
    console.log(presidents)

    return (
        <div className='containerBoardDirectorsChamberScreen'>
            <div className='headerBoardDirectorsChamber'>
                <h1>Mesa Diretora da Câmara dos Deputados</h1>
            </div>
            <h2 className='subHeaderBoardDirectorsChamber'>Presidente</h2>
            <div className="presidentAndViceDivBoardDirectorsChamberScreen">
                <div className='boxDivBoardDirectorsChamberScreen'>
                    <div className='deputiePictureBoardDirectorsChamberScreen'>
                        <img src={require(`../../data/pictures/deputiesPictures/${presidents[presidents.length-1].name}_${presidents[presidents.length-1].id}.jpg`)} />
                    </div>
                    <div className='deputieInfoBoardDirectorsChamberScreen'>
                        <h4>Nome: {presidents[presidents.length-1].name}</h4>
                        <h5>Partido: {presidents[presidents.length-1].party}</h5>
                        <h5>UF: {presidents[presidents.length-1].UF}</h5>
                        <h5>Título: {presidents[presidents.length-1].title}</h5>
                    </div>
                </div>
            </div>
            <h2 className='subHeaderBoardDirectorsChamber'>Vice-Presidentes</h2>
            <div className="presidentAndViceDivBoardDirectorsChamberScreen">
                {presidents.map((dep) => {
                    if (dep.title !== "Presidente") return (
                        <div className='boxDivBoardDirectorsChamberScreen'>
                            <div className='deputiePictureBoardDirectorsChamberScreen'>
                                <img src={require(`../../data/pictures/deputiesPictures/${dep.name}_${dep.id}.jpg`)} />
                            </div>
                            <div className='deputieInfoBoardDirectorsChamberScreen'>
                                <h4>Nome: {dep.name}</h4>
                                <h5>Partido: {dep.party}</h5>
                                <h5>UF: {dep.UF}</h5>
                                <h5>Título: {dep.title}</h5>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div>
                <h2 className='subHeaderBoardDirectorsChamber'>Secretários</h2>
                <div className="boxDivSecretariesBoardDirectorsChamberScreen">
                    {secretaries.map((dep, i) => {
                        if (i <= 1) return (
                            <div className='boxDivBoardDirectorsChamberScreen'>
                                <div className='deputiePictureBoardDirectorsChamberScreen'>
                                    <img src={require(`../../data/pictures/deputiesPictures/${dep.name}_${dep.id}.jpg`)} />
                                </div>
                                <div className='deputieInfoBoardDirectorsChamberScreen'>
                                    <h4>Nome: {dep.name}</h4>
                                    <h5>Partido: {dep.party}</h5>
                                    <h5>UF: {dep.UF}</h5>
                                    <h5>Título: {dep.title}</h5>
                                </div>
                            </div>
                        )}
                    )}
                </div>
                <div className="boxDivSecretariesBoardDirectorsChamberScreen">
                    {secretaries.map((dep, i) => {
                        if (i > 1) return (
                            <div className='boxDivBoardDirectorsChamberScreen'>
                                <div className='deputiePictureBoardDirectorsChamberScreen'>
                                    <img src={require(`../../data/pictures/deputiesPictures/${dep.name}_${dep.id}.jpg`)} />
                                </div>
                                <div className='deputieInfoBoardDirectorsChamberScreen'>
                                    <h4>Nome: {dep.name}</h4>
                                    <h5>Partido: {dep.party}</h5>
                                    <h5>UF: {dep.UF}</h5>
                                    <h5>Título: {dep.title}</h5>
                                </div>
                            </div>
                        )}
                    )}
                </div>
            </div>
            <div>
                <h2 className='subHeaderBoardDirectorsChamber'>Suplentes de Secretários</h2>
                <div className="boxDivSecretariesBoardDirectorsChamberScreen">
                    {substitutes.map((dep, i) => {
                        if (i <= 1) return (
                            <div className='boxDivBoardDirectorsChamberScreen'>
                                <div className='deputiePictureBoardDirectorsChamberScreen'>
                                    <img src={require(`../../data/pictures/deputiesPictures/${dep.name}_${dep.id}.jpg`)} />
                                </div>
                                <div className='deputieInfoBoardDirectorsChamberScreen'>
                                    <h4>Nome: {dep.name}</h4>
                                    <h5>Partido: {dep.party}</h5>
                                    <h5>UF: {dep.UF}</h5>
                                    <h5>Título: {dep.title}</h5>
                                </div>
                            </div>
                        )}
                    )}
                </div>
                <div className="boxDivSecretariesBoardDirectorsChamberScreen">
                    {substitutes.map((dep, i) => {
                        if (i > 1) return (
                            <div className='boxDivBoardDirectorsChamberScreen'>
                                <div className='deputiePictureBoardDirectorsChamberScreen'>
                                    <img src={require(`../../data/pictures/deputiesPictures/${dep.name}_${dep.id}.jpg`)} />
                                </div>
                                <div className='deputieInfoBoardDirectorsChamberScreen'>
                                    <h4>Nome: {dep.name}</h4>
                                    <h5>Partido: {dep.party}</h5>
                                    <h5>UF: {dep.UF}</h5>
                                    <h5>Título: {dep.title}</h5>
                                </div>
                            </div>
                        )}
                    )}
                </div>
            </div>
        </div>
    )
}

export default BoardDirectorsChamberScreen