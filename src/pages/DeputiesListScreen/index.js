import React from 'react';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

import { useFetch } from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import './styles.css';

import DeputiesScreen from '../DeputiesScreen';

const DeputiesListScreen = ({ deputadosEmExercicio }) => {
    console.log(Object.keys(deputadosEmExercicio.nome))
    const items = Object.keys(deputadosEmExercicio.nome);
    // for (let i = 0; i < deputadosEmExercicio.nome.length; i++) {
    //     items.push(i)
    // };

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
    console.log(items)
    console.log(deputadosEmExercicio.nome[items[0]])
    return (
        <div className='containerDeputiesListScreen'>
            <div className='headerDeputiesList'>
                <h1>Lista de Deputados em Exercício</h1>
            </div>
            <Items currentItems={currentItems} data={deputadosEmExercicio}/>

            <div className='containerButtonsPaginationDeputiesList'>
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
    )
}

export default DeputiesListScreen

const Items = ({ currentItems, data }) => {
    return (
        <div className="deputiesListItems">
            {currentItems && currentItems.map((item, i) => (
                <div className="deputiesItem" key={i}>
                    <div className='deputiePictureDeputiesList'>
                        <img src={require(`../../data/pictures/deputiesPictures/${data.nome[item]}_${data.id[item]}.jpg`)} />
                    </div>
                    <div className='deputieInfoDeputiesList'>
                        <p>Nome: {data.nome[item]}</p>
                        <p>Partido: {data.siglaPartido[item]}</p>
                        <p>UF: {data.siglaUf[item]}</p>
                        {/* <p>Foto: {data.urlFoto[item]}</p> */}
                        <Link to={`deputado/${item}`}>Detalhes</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}