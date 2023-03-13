import React from 'react';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './styles.css';

import { useFetch } from '../../hooks/useFetch';
import DeputiesScreen from '../DeputiesScreen';

const DeputiesListScreen = ({ deputadosEmExercicio }) => {
    // console.log(Object.keys(deputadosEmExercicio.nome))
    // const items = Object.keys(deputadosEmExercicio.nome);
    const [items, setItems] = useState(Object.keys(deputadosEmExercicio.nome));

    const [itemOffset, setItemOffset] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const [currentItems, setCurrentItems] = useState(items.slice(itemOffset, endOffset));
    const [pageCount, setPageCount] = useState(0);

    const [filterScreen, setFilterScreen] = useState(false);
    const [nameForSearch, setNameForSearch] = useState('');
    const [stateFilter, setStateFilter] = useState('');
    const [useFilter, setUseFilter] = useState(false);

    const handleChangeTextField = (e) => {
        setNameForSearch(e.target.value);
    };

    const searchDeputieByName = () => {
        const indexDeputiesFound = Object.keys(deputadosEmExercicio.nome).filter((_, index) => {
                return deputadosEmExercicio.nome[index].toLowerCase().includes(nameForSearch.toLowerCase());
        });
        setItems(indexDeputiesFound);
        setNameForSearch('');
        setUseFilter(true);
        setFilterScreen(false);
    };

    const cleanFilters = () => {
        setItems(Object.keys(deputadosEmExercicio.nome));
        setItemOffset(0);
        setUseFilter(false);
        setFilterScreen(false);
    };

    const handleChangeStateFilter = (event) => {
        setStateFilter(event.target.value);
      };

    const searchDeputieByState = () => {
        const indexDeputiesFound = Object.keys(deputadosEmExercicio.siglaUf).filter((_, index) => {
                return deputadosEmExercicio.siglaUf[index].toLowerCase().includes(stateFilter.toLowerCase());
        });
        setItems(indexDeputiesFound);
        setStateFilter('');
        setUseFilter(true);
        setFilterScreen(false);
    };

    const searchDeputieByNameAndState = () => {
        const indexDeputiesFound = Object.keys(deputadosEmExercicio.siglaUf).filter((_, index) => {
            if (deputadosEmExercicio.nome[index].toLowerCase().includes(nameForSearch.toLowerCase()) &&
                deputadosEmExercicio.siglaUf[index].toLowerCase().includes(stateFilter.toLowerCase())
            ) {

                return true;

            } else {return false;}
        });
        setItems(indexDeputiesFound);
        setNameForSearch('');
        setStateFilter('');
        setUseFilter(true);
        setFilterScreen(false);
    };

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
      }, [items, itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % items.length;
        // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

    const onlyUnique = (value, index, array) => {
        return array.indexOf(value) === index;
    };

    const stateList = []
    for (var i = 0; i < Object.keys(deputadosEmExercicio.siglaUf).length; ++i) {
        stateList.push(deputadosEmExercicio.siglaUf[i])
    };

    const states = stateList.filter(onlyUnique).sort();

    // console.log(stateFilter)

    return (
        <div className='containerDeputiesListScreen'>
            <div className='headerDeputiesList'>
                <h1>Lista de Deputados em Exercício</h1>
            </div>

            <div className='divChangeFilterListDeputies'>
                {!filterScreen && (<Button variant="outlined" onClick={() => setFilterScreen(true)}>Buscar / Filtrar Deputados</Button>)}
                {filterScreen && (
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%'}}>
                        <Button
                            variant="outlined"
                            onClick={() => {
                                setItemOffset(0);
                                setFilterScreen(false);
                            }}
                        >
                            Voltar para lista
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={cleanFilters}
                            disabled={!useFilter}
                        >
                            Limpar Filtro
                        </Button>
                    </div>
                )}
            </div>

            {filterScreen && (
                <div  className='divFilterListDeputies'>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <TextField
                            id="outlined-basic"
                            label="Nome do Deputado"
                            variant="outlined"
                            value={nameForSearch}
                            onChange={handleChangeTextField}
                        />
                        <Button
                            variant="contained"
                            onClick={searchDeputieByName}
                            style={{marginLeft: '20px'}}
                            disabled={nameForSearch === '' ? true : false}
                        >
                                Buscar
                        </Button>  
                    </div>

                    <div 
                        style={{
                            display: 'flex', width: '20%', flexDirection: 'row', justifyContent: 'center',
                            marginTop: '30px', alignSelf: 'center'
                        }}
                    >
                        <div style={{display:'flex', width:'100%', minWidth: '90px'}}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                                <Select
                                    value={stateFilter}
                                    label="Estado"
                                    onChange={handleChangeStateFilter}
                                >
                                    {states.map((s, i) => (
                                        <MenuItem value={s} key={i}>{s}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <Button
                            variant="contained"
                            onClick={searchDeputieByState}
                            style={{marginLeft: '20px'}}
                            disabled={stateFilter === '' ? true : false}
                        >
                                Filtrar
                        </Button>
                    </div>
                    <div style={{marginTop: '30px'}}>
                        <Button
                            onClick={searchDeputieByNameAndState}
                            variant="contained"
                            disabled={(nameForSearch !== '' && stateFilter !== '') ? false : true}
                        >
                            Filtrar por Nome e Estado
                        </Button>
                    </div>
                </div>
            )}

            {!filterScreen && (
                <div>
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
            )}
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
                        <h4>Nome: {data.nome[item]}</h4>
                        <h5>Partido: {data.siglaPartido[item]}</h5>
                        <h5>UF: {data.siglaUf[item]}</h5>
                        <Link to={`deputado/${item}`}>Detalhes</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}