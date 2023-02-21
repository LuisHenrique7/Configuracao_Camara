import React from 'react';
import './styles.css';

const BoardDirectorsChamberScreen = ({ mesaDiretoraCamara }) => {
    console.log(Object.keys(mesaDiretoraCamara.nome).length)

    const presidents = [];
    const secretaries = [];
    const substitutes = [];

    for (var d = 0; d < Object.keys(mesaDiretoraCamara.nome).length; ++d) {
        const name = mesaDiretoraCamara.nome[d];
        const party = mesaDiretoraCamara.siglaPartido[d];
        const UF = mesaDiretoraCamara.siglaUf[d];
        const photo = mesaDiretoraCamara.urlFoto[d];
        const title = mesaDiretoraCamara.titulo[d];

        if (title.includes("Presidente")) {
            presidents.push(
                {
                    "name": name,
                    "party" : party,
                    "UF" : UF,
                    "photo" : photo,
                    "title" : title,
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
            <div><h1>Mesa Diretora da Câmara dos Deputados</h1></div>
            <h2>Presidente</h2>
            <div className="presidentAndViceDivBoardDirectorsChamberScreen">
                <div className='boxDivBoardDirectorsChamberScreen'>
                    <p>Nome: {presidents[presidents.length-1].name}</p>
                    <p>Partido: {presidents[presidents.length-1].party}</p>
                    <p>UF: {presidents[presidents.length-1].UF}</p>
                    {/* <p>{presidents[presidents.length-1].name}</p> */}
                    <p>Título: {presidents[presidents.length-1].title}</p>
                </div>
            </div>
            <h2>Vice-Presidentes</h2>
            <div className="presidentAndViceDivBoardDirectorsChamberScreen">
                {presidents.map((dep) => {
                    if (dep.title !== "Presidente") return (
                        <div className='boxDivBoardDirectorsChamberScreen'>
                            <p>Nome: {dep.name}</p>
                            <p>Partido: {dep.party}</p>
                            <p>UF: {dep.UF}</p>
                            {/* <p>{dep.name}</p> */}
                            <p>Título: {dep.title}</p>
                        </div>
                    );
                })}
            </div>
            <div>
                <h2>Secretários</h2>
                <div className="boxDivSecretariesBoardDirectorsChamberScreen">
                    {secretaries.map((dep) => (
                        <div className='boxDivBoardDirectorsChamberScreen'>
                            <p>Nome: {dep.name}</p>
                            <p>Partido: {dep.party}</p>
                            <p>UF: {dep.UF}</p>
                            {/* <p>{dep.name}</p> */}
                            <p>Título: {dep.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2>Suplentes de Secretários</h2>
                <div className="boxDivSecretariesBoardDirectorsChamberScreen">
                    {substitutes.map((dep) => (
                        <div className='boxDivBoardDirectorsChamberScreen'>
                            <p>Nome: {dep.name}</p>
                            <p>Partido: {dep.party}</p>
                            <p>UF: {dep.UF}</p>
                            {/* <p>{dep.name}</p> */}
                            <p>Título: {dep.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BoardDirectorsChamberScreen