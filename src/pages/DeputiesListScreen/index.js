import React from 'react';
import { useState, useEffect } from 'react';

import ReactPaginate from 'react-paginate';
import TextField from '@mui/material/TextField';

import { useFetch } from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import './styles.css';

import DeputiesScreen from '../DeputiesScreen';

const DeputiesListScreen = ({ deputadosEmExercicio }) => {
    // console.log(Object.keys(deputadosEmExercicio.nome))
    const items = Object.keys(deputadosEmExercicio.nome);
    // const [items, setItems] = useState(Object.keys(deputadosEmExercicio.nome));
    // for (let i = 0; i < deputadosEmExercicio.nome.length; i++) {
    //     items.push(i)
    // };

    const [itemOffset, setItemOffset] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const [currentItems, setCurrentItems] = useState(items.slice(itemOffset, endOffset));
    const [pageCount, setPageCount] = useState(0);

    const [nameForSearch, setNameForSearch] = useState('');
    const [useFilter, setUseFilter] = useState(false);
    const [filterScreen, setFilterScreen] = useState(false);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        if (useFilter === false) {
            console.log("useEfect if")
            setCurrentItems(items.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(items.length / itemsPerPage));
        } else {
            console.log("useEfect else")
            setPageCount(Math.ceil((currentItems.length + 1) / itemsPerPage));
        }
      }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % items.length;
        // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

    const handleChangeTextField = (e) => {
        setNameForSearch(e.target.value);
    };

    const searchDeputieByName = () => {
        setUseFilter(true);
        const indexDeputiesFound = Object.keys(deputadosEmExercicio.nome).filter((key, index) => {
                // return nameForSearch.toLowerCase() === deputadosEmExercicio.nome[index].toLowerCase();
                return deputadosEmExercicio.nome[index].toLowerCase().includes(nameForSearch.toLowerCase());
        });
        console.log("------", indexDeputiesFound)

        setCurrentItems(indexDeputiesFound.slice(itemOffset, endOffset));
        console.log(currentItems);
        console.log(useFilter)
        // setItemOffset(0);
        // const endOffset = itemOffset + itemsPerPage;
        // setCurrentItems(items.slice(itemOffset, endOffset));
        // setPageCount(Math.ceil(currentItems.length / itemsPerPage));
        console.log(itemsPerPage, Math.ceil(15 / itemsPerPage))
        console.log("page = ", pageCount)
        setNameForSearch('');
        setFilterScreen(false);
    };

    const cleanFilters = () => {
        setCurrentItems(items.slice(itemOffset, endOffset));
        setFilterScreen(false);
        setUseFilter(false);
    };
    // const indexDeputiesFound = Object.keys(deputadosEmExercicio.nome).filter((key, index) => {
    //         return "Adail Filho" === deputadosEmExercicio.nome[index] 
    // })
    // console.log(indexDeputiesFound)

    // console.log(Object.keys(deputadosEmExercicio.nome).map((x) => x))
    // Object.keys(deputadosEmExercicio.nome).map((x, index) => {
    //     if (deputadosEmExercicio.nome[index] === "Adail Filho") {
    //         console.log(x, index)
    //     }
    // })

    // console.log(items)
    // console.log(deputadosEmExercicio.nome[items[0]])
    console.log(nameForSearch)
    // console.log(items.filter((value, index) => {
    //     return items[index].includes
    // }))
    console.log(items)
    console.log("use filter ", useFilter)

    return (
        <div className='containerDeputiesListScreen'>
            <div className='headerDeputiesList'>
                <h1>Lista de Deputados em Exercício</h1>
            </div>

            <div>
                {!filterScreen && (<button onClick={() => setFilterScreen(true)}>Buscar / Filtrar Deputados</button>)}
                {filterScreen && (
                    <div>
                        <button onClick={() => setFilterScreen(false)}>Voltar para lista</button>
                        <button onClick={cleanFilters}>Limpar Filtro</button>
                    </div>
                )}
            </div>

            {filterScreen && (
                <div>
                    <div>
                        <TextField
                            id="outlined-basic"
                            label="Nome do Deputado"
                            variant="outlined"
                            value={nameForSearch}
                            onChange={handleChangeTextField}
                        />
                        <button onClick={searchDeputieByName}>Buscar</button>
                        
                    </div>
                </div>
            )}

            {!filterScreen && (
                <div>
                    <Items currentItems={currentItems} data={deputadosEmExercicio} />
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
            )}
        </div>
    )
}

export default DeputiesListScreen

const Items = ({ currentItems, data }) => {
    return (
        <div className="deputiesListItems">
            {currentItems && currentItems.map((item) => (
                <div className="deputiesItem">
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