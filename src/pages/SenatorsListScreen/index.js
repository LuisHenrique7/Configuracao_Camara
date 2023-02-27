import React from 'react';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

import './styles.css';

import { useFetch } from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

const url = "https://dadosabertos.camara.leg.br/api/v2/deputados?itens=5&ordem=ASC&ordenarPor=nome";

const SenatorsListScreen = ({ senadoresEmExercicio }) => {
    const items = [];
    for (let i = 0; i < senadoresEmExercicio.NomeParlamentar.length; i++) {
        items.push(i)
    };

    // const items = senadoresEmExercicio.NomeParlamentar;
    const [itemOffset, setItemOffset] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const [currentItems, setCurrentItems] = useState(items.slice(itemOffset, endOffset));
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
      }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % items.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

    const [deputieSelected, setDeputieSelected] = useState(false);

    // const [deputiesData, setDeputiesData] = useState([]);

    // const { data: items, loading, error } = useFetch(url);

    // useEffect(() => {
    //     async function fetchData() {
    //         const res = await fetch(url);

    //         const data = await res.json();

    //         console.log(data);
    //         setDeputiesData(data);
    //     }

    //     fetchData();
    // }, []);
    // console.log(senadoresEmExercicio)
    console.log(senadoresEmExercicio.NomeParlamentar.length)
    
    return (
        // <div>
        //     {deputieSelected === false ? (
        //         <div>
        //             <h1>SenatorsListScreen</h1>
        //             <button onClick={() => {setDeputieSelected(true)}}>Deputado</button>
        //             {loading && <p>Carregando dados...</p>}
        //             {error && <p>{error}</p>}
        //             <ul>
        //                 {items &&
        //                 items.dados.map((deputie) => (
        //                     <li key={deputie.id}>
        //                         <img src={deputie.urlFoto} />
        //                         <p>Nome: {deputie.nome}</p>
        //                         <p>Partido: {deputie.siglaPartido}</p>
        //                         <p>UF: {deputie.siglaUf}</p>
        //                     </li>
        //                 ))}
        //             </ul>
        //             {/* <ul>
        //                 {deputiesData.dados.map((deputie) => (
        //                     <li key={deputie.id}>
        //                         <img src={deputie.urlFoto} />
        //                         <p>Nome: {deputie.nome}</p>
        //                         <p>Partido: {deputie.siglaPartido}</p>
        //                         <p>UF: {deputie.siglaUf}</p>
        //                     </li>
        //                 ))}
        //             </ul> */}
        //         </div>) : (
        //         <div>
        //             <DeputiesScreen />
        //         </div>)
        //     }
        // </div>

        <div className='containerSenatorsListScreen'>
            <div className='headerSenatorsList'>
                <h1>Lista de Senadores em Exercício</h1>
            </div>
            
            <Items currentItems={currentItems} data={senadoresEmExercicio}/>

            <div className='containerButtonsPaginationSenatorsList'>
                <ReactPaginate
                    nextLabel="Próximo >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< Anterior"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>

        // <div>
        //     <h1>SenatorsListScreen</h1>
        //     <ul>
        //         {senadoresEmExercicio.NomeParlamentar.map((senator) => (
        //             <li key={senator.id}>
        //                 <p>Nome: {senator}</p>
        //                 {/* <img src={deputie.urlFoto} />
        //                 <p>Partido: {deputie.siglaPartido}</p>
        //                 <p>UF: {deputie.siglaUf}</p> */}
        //             </li>
        //         ))}
        //     </ul>
        // </div>
    )
}

export default SenatorsListScreen

const Items = ({ currentItems, data }) => {
    return (
        <div className="senatorsListItems">
            {currentItems && currentItems.map((item) => (
                <div className="senatorsItem">
                    <p>Nome: {data.NomeParlamentar[item]}</p>
                    <p>Partido: {data.SiglaPartidoParlamentar[item]}</p>
                    <p>UF Mandato: {data.UfMandatoParlamentar[item]}</p>
                    <p>Participação: {data.DescricaoParticipacao[item]}</p>
                    <Link to={`senador/${item}`}>Detalhes</Link>
                </div>
            ))}
        </div>
    );
}