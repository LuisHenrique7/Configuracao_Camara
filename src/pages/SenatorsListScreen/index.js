import React from 'react';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

import './styles.css';

import { useFetch } from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

const SenatorsListScreen = ({ senadoresEmExercicio }) => {
    const items = Object.keys(senadoresEmExercicio.NomeParlamentar);
    // const items = [];
    // for (let i = 0; i < senadoresEmExercicio.NomeParlamentar.length; i++) {
    //     items.push(i)
    // };

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
    console.log(senadoresEmExercicio.NomeParlamentar.length)
    
    return (
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
    )
}

export default SenatorsListScreen

const Items = ({ currentItems, data }) => {
    return (
        <div className="senatorsListItems">
            {currentItems && currentItems.map((item) => (
                <div className="senatorsItem">
                    <div className='senatorPictureSenatorsList'>
                        <img src={require(`../../data/pictures/senatorsPictures/${data.NomeParlamentar[item]}.jpg`)} />
                    </div>
                    <div className='senatorInfoSenatorsList'>
                        <h4>Nome: {data.NomeParlamentar[item]}</h4>
                        <h5>Partido: {data.SiglaPartidoParlamentar[item]}</h5>
                        <h5>UF Mandato: {data.UfMandatoParlamentar[item]}</h5>
                        <h6>Participação: {data.DescricaoParticipacao[item]}</h6>
                        <Link to={`senador/${item}`}>Detalhes</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}