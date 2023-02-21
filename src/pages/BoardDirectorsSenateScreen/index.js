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

    return (
        <div className='containerBoardDirectorsSenateScreen'>
            <div><h1>Mesa Diretora do Senado</h1></div>
            <h2>Presidente</h2>
            <div className="presidentAndViceDivBoardDirectorsSenateScreen">
                <div className='boxDivBoardDirectorsSenateScreen'>
                    <p>Nome: {presidents[0].name}</p>
                    <p>Partido: {presidents[0].party}</p>
                    <p>UF: {presidents[0].UF}</p>
                    <p>Título: {presidents[0].title}</p>
                </div>
            </div>
            <h2>Vice-Presidentes</h2>
            <div className="presidentAndViceDivBoardDirectorsSenateScreen">
                {presidents.map((dep) => {
                    if (dep.title !== "PRESIDENTE") return (
                        <div className='boxDivBoardDirectorsSenateScreen'>
                            <p>Nome: {dep.name}</p>
                            <p>Partido: {dep.party}</p>
                            <p>UF: {dep.UF}</p>
                            <p>Título: {dep.title}</p>
                        </div>
                    );
                })}
            </div>
            <div>
                <h2>Secretários</h2>
                <div className="boxDivSecretariesBoardDirectorsSenateScreen">
                    {secretaries.map((dep) => (
                        <div className='boxDivBoardDirectorsSenateScreen'>
                            <p>Nome: {dep.name}</p>
                            <p>Partido: {dep.party}</p>
                            <p>UF: {dep.UF}</p>
                            <p>Título: {dep.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2>Suplentes de Secretários</h2>
                <div className="boxDivSecretariesBoardDirectorsSenateScreen">
                    {substitutes.map((dep) => (
                        <div className='boxDivBoardDirectorsSenateScreen'>
                            <p>Nome: {dep.name}</p>
                            <p>Partido: {dep.party}</p>
                            <p>UF: {dep.UF}</p>
                            <p>Título: {dep.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BoardDirectorsSenateScreen