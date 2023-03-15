import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const GroupDeputiesScreen = ({ frentesDeputados }) => {
    console.log(Object.keys(frentesDeputados.id).length);

    return (
        <div className='containerGroupDeputiesScreen'>
            <div className='headerGroupDeputiesScreen'>
                <h1>Frentes Parlamentares</h1>
            </div>
            <div className='groupsListItems'>
                {Object.keys(frentesDeputados.id).map((i) => (
                    <div className='groupsItem' key={i}>
                        <p>{frentesDeputados.titulo[i]}</p>
                        <Link to={`frente/${i}`}>Membros</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GroupDeputiesScreen