import React from 'react';
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './styles.css';

import { useFetch } from '../../hooks/useFetch';

const SenatorsListScreen = ({ senadoresEmExercicio }) => {
    // const items = Object.keys(senadoresEmExercicio.NomeParlamentar);
    const [items, setItems] = useState(Object.keys(senadoresEmExercicio.NomeParlamentar));

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

    const searchSenatorByName = () => {
        const indexSenatorsFound = Object.keys(senadoresEmExercicio.NomeParlamentar).filter((_, index) => {
                return senadoresEmExercicio.NomeParlamentar[index].toLowerCase().includes(nameForSearch.toLowerCase());
        });
        setItems(indexSenatorsFound);
        setNameForSearch('');
        setUseFilter(true);
        setFilterScreen(false);
    };

    const cleanFilters = () => {
        setItems(Object.keys(senadoresEmExercicio.NomeParlamentar));
        setItemOffset(0);
        setUseFilter(false);
        setFilterScreen(false);
    };

    const handleChangeStateFilter = (event) => {
        setStateFilter(event.target.value);
      };

    const searchSenatorByState = () => {
        const indexSenatorsFound = Object.keys(senadoresEmExercicio.UfMandatoParlamentar).filter((_, index) => {
                return senadoresEmExercicio.UfMandatoParlamentar[index].toLowerCase().includes(stateFilter.toLowerCase());
        });
        setItems(indexSenatorsFound);
        setStateFilter('');
        setUseFilter(true);
        setFilterScreen(false);
    };

    const searchSenatorByNameAndState = () => {
        const indexSenatorsFound = Object.keys(senadoresEmExercicio.UfMandatoParlamentar).filter((_, index) => {
            if (senadoresEmExercicio.NomeParlamentar[index].toLowerCase().includes(nameForSearch.toLowerCase()) &&
                senadoresEmExercicio.UfMandatoParlamentar[index].toLowerCase().includes(stateFilter.toLowerCase())
            ) {

                return true;

            } else {return false;}
        });
        setItems(indexSenatorsFound);
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
    for (var i = 0; i < Object.keys(senadoresEmExercicio.UfMandatoParlamentar).length; ++i) {
        stateList.push(senadoresEmExercicio.UfMandatoParlamentar[i])
    };

    const states = stateList.filter(onlyUnique).sort();
    
    return (
        <div className='containerSenatorsListScreen'>
            <div className='headerSenatorsList'>
                <h1>Lista de Senadores em Exercício</h1>
            </div>

            <div className='divChangeFilterListSenators'>
                {!filterScreen && (<Button variant="outlined" onClick={() => setFilterScreen(true)}>Buscar / Filtrar Senadores</Button>)}
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
                <div  className='divFilterListSenators'>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <TextField
                            id="outlined-basic"
                            label="Nome do Senador"
                            variant="outlined"
                            value={nameForSearch}
                            onChange={handleChangeTextField}
                        />
                        <Button
                            variant="contained"
                            onClick={searchSenatorByName}
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
                            onClick={searchSenatorByState}
                            style={{marginLeft: '20px'}}
                            disabled={stateFilter === '' ? true : false}
                        >
                                Filtrar
                        </Button>  
                    </div>
                    <div style={{marginTop: '30px'}}>
                        <Button
                            onClick={searchSenatorByNameAndState}
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
            )}
        </div>
    )
}

export default SenatorsListScreen

const Items = ({ currentItems, data }) => {
    return (
        <div className="senatorsListItems">
            {currentItems && currentItems.map((item, i) => (
                <div className="senatorsItem" key={i}>
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